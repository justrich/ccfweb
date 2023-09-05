---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
episode: "{{ replace .Name "-" " " | title }}"
draft: true
---

### Transcript for episode: {{ replace .Name "-" " " | title }}
