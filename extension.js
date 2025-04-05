//    Move date to the right
//    GNOME Shell extension
//    @fthx 2025


import * as Main from 'resource:///org/gnome/shell/ui/main.js';


export default class MoveDateExtension {
    _moveDate(active) {
        if (active) {
            Main.sessionMode.panel.center = Main.sessionMode.panel.center.filter(item => item != 'dateMenu')
            Main.sessionMode.panel.left.splice(-1, 0, 'dateMenu');
        } else {
            Main.sessionMode.panel.left = Main.sessionMode.panel.right.filter(item => item != 'dateMenu')
            Main.sessionMode.panel.center.push('dateMenu');
        }

        Main.panel._updatePanel();
    }

    enable() {
        this._moveDate(true);
    }

    disable() {
        this._moveDate(false);
    }
}
