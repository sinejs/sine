import * as utils from '../utility';
import { Lexer } from './lexer';
import { Parser } from './parser';
import { HtmlLexer } from './html-lexer';
import { HtmlParser } from './html-parser';

var parseOptions = {
    isIdentifierContinue: false,
    isIdentifierStart: false,
    literals: {
        false: false,
        null: null,
        true: true,
        undefined: undefined
    }
};

function parse(html) {
    var lexer = new HtmlLexer(parseOptions);
    var parser = new HtmlParser(lexer, parseOptions);
    return parser.parse(html);
}

function compile(html, options) {
    var defaults = {
            getEmbedTpl: function () {
                return '';
            },
            containsComponent: function () {
                return false;
            },
            createComponent: function () {
                return null;
            },
            containsDirective: function () {
                return false;
            },
            createDirective: function () {
                return null;
            }
        },
        settings = utils.merge(defaults, options),
        astNodes = parse(html);

    astNodes.forEach(function (astNode) {
        astNode.compile(settings);
    });
    astNodes.forEach(function (astNode) {
        astNode.notifyCompiled(settings);
    });

    return function (scope) {
        var fragment = document.createDocumentFragment();

        scope.$$childElements = astNodes;

        astNodes.forEach(function (astNode) {
            fragment.appendChild(astNode.link(scope));
        });
        astNodes.forEach(function (astNode) {
            astNode.notifyLinked();
        });

        return fragment;
    };
}

function compute(exp, scope, options) {
    options = options || {};
    options.createFilter = function (name) {
        return injector.createFilter(name);
    };
    if (options.collectMembers) {
        options.members = [];
    }
    return parseExp(exp).compute(scope, options);
}

function parseExp(exp) {
    if (exp == null) {
        return;
    }

    exp = exp.trim();

    if (exp.length === 0) {
        return;
    }

    exp = exp.replace('&gt;', '>').replace('&lt;', '<');

    var lexer = new Lexer(parseOptions);
    var parser = new Parser(lexer, parseOptions);

    return parser.parse(exp);
}

function parseAssignment(exp, scope, options) {
    var ast = parseExp(exp);
    var memberExp = ast.getMemberExpression();

    if (memberExp == null) {
        throw new Error(exp + 'is not valid member expression');
    }

    options = options || {};

    options.createFilter = function (name) {
        return injector.createFilter(name);
    };

    return {
        obj: memberExp.object.compute(scope, options, {}, scope),
        prop: memberExp.property.compute(scope, options, { propertyKey: true }, scope)
    }
}

export { compile, compute, parse, parseExp, parseAssignment };