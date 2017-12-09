# Mortality
Simple age timer for me, so I can have a 'motivation' chrome plug-in style new tab page for firefox quantum.
Link to original here: https://chrome.google.com/webstore/detail/motivation/ofdgfpchbidcgncgfpdlpclnpaemakoj?hl=en

## Problem
Currently, firefox doesn't have fine-grained controls on custom new-tab pages (as far as I know).
And a lot of old firefox plugins don't work on Quantum.
But I wanted a motivation-style age timer. So I made my own.

## Setting Up
Want to use it for yourself? It's pretty rough, but here's how to do it:
1) Fork the repository.
2) Modify the subtracted element in the variable n in index.html (on my **To-do** to fix in the near future).
   I used 'motivation' as a cross-reference for my constants.
3) In Firefox Quantum, go to 'about:preferences' (or click on options to be brought there) and:
    -  Select 'Show your home page' under the 'when firefox starts' item.
    -  In homepage, paste wherever you're hosting the app. For me, I'm using Github pages, so it's "mattfan.me/mortality"

## Issues
- Rudimentary current age calculation. Not a big issue rn, since it's mainly for personal use, but will make it more flexible and easier to fork in the future.
- Only shows on start-up. As far as I know, this is a limitation with Firefox Quantum, which I can't fix. Will update when this changes.
- Still has source URL in search/nav bar on load. Again, I think this is a limitation with Firefox Quantum, will fix when able.
