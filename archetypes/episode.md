---
title: "Episode: {{ replace .Name "-" " " | title }}"
tagline: "Episode Title"
episode: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
recorded: {{ .Date }}
released: {{ .Date }}
draft: true
spotifyEpisode: "xxxxxx"
appleEpisode: "The part after ?i=<xxxxxxxx>"
embedApple: "Enture url from the iframe embed""
---
## Episode summary:

Episode description goes here.

## Episode notes:

**Any relevant episode notes here, for example information about any guests
or links mentioned in the episode**