(function(global, sine) {
    'use strict';

    var noteApp = 'app.note';

    sine.namespace(noteApp).component('test-embed', {
        template: '<div *n-embed></div>',
        props: {
            name: 'embed'
        }
    });

    sine.namespace(noteApp).service('noteService', {
        props: {
            zIndex: 0,
            notes: [],
            isEditing: false
        },
        methods: {
            nextZIndex: function () {
                return ++this.zIndex;
            },
            isMaxZIndex: function (zIndex) {
                return zIndex >= this.zIndex;
            },
            create: function () {
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

                this.notes.push(newNote);

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
            removeAll: function () {
                this.notes.length = 0;
            },
            remove: function (note) {
                var index = this.notes.indexOf(note);

                if (index !== -1) {
                    this.notes.splice(index, 1);
                }
            },
            toggleEdit: function () {
                this.isEditing = !this.isEditing;
            }
        }
    });

    sine.namespace(noteApp).directive('note-pan', function(ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function() {
            x = scope.model.position.x;
            y = scope.model.position.y;
        });

        hammerTime.on('panmove', function(ev) {
            scope.proxy.model.position.x = x + ev.deltaX;
            scope.proxy.model.position.y = y + ev.deltaY;
        });
    });

    sine.namespace(noteApp).directive('note-resize', function(ele, binding) {
        var scope = binding.scope;
        var hammerTime = new Hammer(ele);

        var x, y;
        hammerTime.on('panstart', function() {
            x = scope.model.size.width;
            y = scope.model.size.height;
        });

        hammerTime.on('panmove', function(ev) {
            scope.proxy.model.size.width = x + ev.deltaX;
            scope.proxy.model.size.height = y + ev.deltaY;
        });
    });

    sine.namespace(noteApp).component('note', {
        templateUrl: './note.html',
        inject: {
            noteService: 'noteService'
        },
        events: ['destroy'],
        props: {
            model: {
                content: 'this is content',
                position: {
                    x: 20,
                    y: 20
                },
                zIndex: 0
            },
            isEditing: false
        },
        methods: {
            onMouseDown: function () {
                if (!this.noteService.isMaxZIndex(this.model.zIndex)) {
                    this.proxy.model.zIndex = this.noteService.nextZIndex();
                }
            }
        },
        onInit: function () {
            var self = this;

            this.$watch(/^model\./, function () {
                self.noteService.save();
            });

            this.$watchProp(this.noteService, 'isEditing', function (a, b, c) {
                self.proxy.isEditing = self.noteService.isEditing;
            });

            this.isEditing = this.noteService.isEditing;
        },
        onDestroy: function () {
            this.destroy.fire();
        }
    });

    sine.namespace(noteApp).component('app', {
        templateUrl: './app.html',
        inject: {
            noteService: 'noteService'
        },
        props: {
            notes: []
        },
        methods: {
            createNote: function() {
                this.proxy.noteService.create();
                this.noteService.save();
            },
            saveNote: function() {
                this.noteService.save();
            },
            clearNote: function() {
                this.proxy.noteService.removeAll();
                this.noteService.save();
            },
            removeNote: function(note) {
                this.noteService.remove(note);
                this.noteService.save();
            },
            editNote: function () {
                this.proxy.noteService.toggleEdit();
            }
        },
        onInit: function() {
            this.noteService.load();
            this.notes = this.noteService.getList();
        }
    });

    global.onload = function() {
        sine.bootstrap('app', 'app');
    };

})(window, sine);