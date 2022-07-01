# Audiobook metadata manager

Managing metadata for audiobooks sucks, each application has it's own file to manage the metadata so you often have to edit the metadata in iTunes, Apple Books, Plex, and wherever you store your audiobook files. This project aims to simplify metadata management by editing the metadata on the files themselves which iTunes, Apple Books, and others use to prepopulate their application specific metadata. In theory this will solve most of your metadata management woes.


## Dev notes

Because it's currently "working" with some non-optimal items. I think it's best to work on distribution next.
- bundle ffmpeg binaries
- set ffmpeg path to reference the binaries
- figure out application signing/distribution

### Things I want to change

I want to figure out how to prevent the image from being deleted when you edit the metadata