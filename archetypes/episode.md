---
title: "Episode: {{ replace .Name "-" " " | title }}"
tagline: "Episode Title"
date: {{ .Date }}
draft: true
---
## Episode summary:

Episode description goes here.

## Episode notes:

**Any relevant episode notes here, for example information about any guests
or links mentioned in the episode**

* Originally recorded:
* Released: 

#### Listen to episode:
{{/*
Grab the URL from the embed code on the spotify for podcasters dashboard.
EG: Episode 1 is "Cancer-and-Crossfit-Introduction-e27gof6"
*/}}
{{<iframe "Cancer-and-Crossfit-someepisodetitle-xxxxxx">}}

{{<episodelist>}}