(function(global, sine) {
    'use strict';

    var noteApp = 'app.note';

    sine.namespace(noteApp).component('test-embed', {
        template: '<div *n-embed></div>',
        construct: function () {
            this.name = 'embed';
        }
    });

    sine.namespace(noteApp).service('noteService', {
        construct: function () {
            this.zIndex = 0;
            this.notes = [];
            this.isEditing = false;
        },
        methods: {
            nextZIndex: function () {
                return ++this.zIndex;
            },
            isMaxZIndex: function (zIndex) {
                return zIndex >= this.zIndex;
            },
            create: function (notes) {
                var newNote = {
                    content: 'new note',
                    position: {
                        x: 20,
                        y: 20
                    },
                    size: {
                        width: 180,
                        height: 180
                    },
                    zIndex: this.nextZIndex()
                };

                notes.toProxy().push(newNote);

                return newNote;
            },
            getList: function () {
                return this.notes;
            },
            load: function () {
                var self = this,
                    json = localStorage.getItem('notes');
                if (json) {
                    this.notes = JSON.parse(json);
                    this.notes.forEach(function (note) {
                        if (note.zIndex > self.zIndex) {
                            self.zIndex = note.zIndex;
                        }
                    });
                }
            },
            save: function () {
                localStorage.setItem('notes', JSON.stringify(this.getList()));
            },
            removeAll: function (notes) {
                notes.length = 0;
            },
            remove: function (note) {
                var index = this.notes.indexOf(note);

                if (index !== -1) {
                    this.notes.toProxy().splice(index, 1);
                }
            },
            toggleEdit: function () {
                this.toProxy().isEditing = !this.isEditing;
            }
        }
    });

    sine.namespace(noteApp).directive('note-pan', function() {
        var scope = this.$binding.scope;
        var hammerTime = new Hammer(this.$htmlElement);

        var x, y;
        hammerTime.on('panstart', function () {
            x = scope.model.position.x;
            y = scope.model.position.y;
        });

        hammerTime.on('panmove', function (ev) {
            var pos = scope.model.position.toProxy();
            pos.x = x + ev.deltaX;
            pos.y = y + ev.deltaY;
        });
    });

    sine.namespace(noteApp).directive('note-resize', function() {
        var scope = this.$binding.scope;
        var hammerTime = new Hammer(this.$htmlElement);

        var x, y;
        hammerTime.on('panstart', function() {
            x = scope.model.size.width;
            y = scope.model.size.height;
        });

        hammerTime.on('panmove', function(ev) {
            var size = scope.model.size.toProxy();
            size.width = x + ev.deltaX;
            size.height = y + ev.deltaY;
        });
    });

    sine.namespace(noteApp).component('note', {
        templateUrl: './note.html',
        inject: {
            noteService: 'noteService'
        },
        construct: function (Messenger) {
            this.model = null;
            this.destroy = new Messenger();
        },
        methods: {
            onMouseDown: function () {
                if (!this.noteService.isMaxZIndex(this.model.zIndex)) {
                    this.model.toProxy().zIndex = this.noteService.nextZIndex();
                }
            },
            onInit: function () {
                var self = this;

                this.$watch(this.model, /\w+/i, function () {
                    self.noteService.save();
                });

                this.$watch(this.model.position, /\w+/i, function () {
                    self.noteService.save();
                });
            },
            onDestroy: function () {
                this.destroy.fire();
            }
        }
    });

    sine.namespace(noteApp).component('app', {
        templateUrl: './app.html',
        inject: {
            noteService: 'noteService'
        },
        construct: function () {
            this.noteService.load();
            this.notes = this.noteService.getList();
        },
        methods: {
            createNote: function () {
                this.noteService.create(this.notes);
                this.noteService.save();
            },
            saveNote: function () {
                this.noteService.save();
            },
            clearNote: function () {
                this.noteService.removeAll(this.notes);
                this.noteService.save();
            },
            removeNote: function (note) {
                this.noteService.remove(note);
                this.noteService.save();
            },
            editNote: function () {
                this.noteService.toggleEdit();
            }
        }
    });

    global.onload = function() {
        sine.bootstrap('#app');
    };

})(window, sine);