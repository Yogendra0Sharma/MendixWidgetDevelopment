//TaskWidget/widget/TaskWidget.js
define(["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin",
        "dojo/text!./templates/TasksWidget.html"
    ],
    function (declare,_WidgetBase, _TemplatedMixin,template) {
        return declare([_WidgetBase, _TemplatedMixin], {

            // Our template - important to load & parse template
            templateString: template,
        });
    }); // and that's it!