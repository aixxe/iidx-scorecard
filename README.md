# iidx-scorecard

Vue.js scorecard replica for use with [ameto](https://github.com/aixxe).

## Examples

![imgui demo in Counter-Strike: Global Offensive on Linux](https://i.imgur.com/qCDSBof.png)
![imgui demo in Counter-Strike: Source on Linux](https://i.imgur.com/vi32XGx.png)


## Usage

[Download](https://github.com/aixxe/iidx-scorecard/archive/master.zip) and extract `iidx-scorecard-master` to the `ameto/plugins/scorecard/assets` directory.

In `ameto/plugins/discord/config.json` ensure that the `style` setting is updated to use the new card.

```json
"style": "iidx-scorecard-master",
```

You can also configure the `options` block to adjust scorecard behaviour.

```json
"options": {
    "auto_max_pacemaker": true,
    "show_chart_rating": true,
    "show_mascot": false
}
``` 

- **auto_max_pacemaker** will switch your pacemaker to target 100% if your score exceeds the usual AAA+.
- **show_chart_rating** can be used to show or hide the chart rating next to the difficulty. Hidden on official cards.
- **show_mascot** toggles the character that appears in the bottom right corner of the scorecard. You should edit the array in `components/mascot/component.js` before enabling this.

Finally, change the avatar image in `components/avatar/images/avatar.png` to your liking.

## Resources

The following fonts are used in the Photoshop document.

- https://fonts.google.com/specimen/Kosugi
- https://fonts.google.com/specimen/Kosugi+Maru
- https://fonts.google.com/specimen/Work+Sans
- https://fonts.google.com/specimen/Orbitron
- https://fonts.google.com/specimen/Exo

Background image by [starline](https://www.freepik.com/free-photo/abstract-smooth-blue-light-streak-wave-background_5083076.htm) at Freepik.com.