import React, { useState } from "react"
import { Radio, RadioGroup, Field, Label  } from '@headlessui/react';

interface SubtitleFormatsInterface {
    format: string;
    description: string;
}

const subtitleFormats: SubtitleFormatsInterface[] = [
    {
        format: "vtt",
        description: " VTT, or Web Video Text Tracks, is a subtitle format designed primarily for HTML5 videos. It supports features like captions, subtitles, descriptions, and metadata. VTT files are widely used for web-based video content, particularly with the <track> element in HTML5."
    },
    {
        format: "srt",
        description: "SRT, or SubRip Subtitle, is one of the most common subtitle formats. It is a plain text format that contains the sequence number, start and end timecodes, and the subtitle text."
    }
]


export const SubtitleFormat = () => {

    // The Subtitle Format Radio Group State
    let [selected, setSelected] = useState(subtitleFormats[0].format)

    return (
        <div className='p-4 rounded gap-5 flex flex-col items-center'>
        <p>Select subtitle format</p>
        <RadioGroup className={'flex gap-5'} value={selected} onChange={setSelected} aria-label="Subtitle Format">
        {subtitleFormats.map((subtitleFormat) => (
          <Field title={subtitleFormat.description} key={subtitleFormat.format} className="flex items-center gap-2 cursor-pointer">
            <Radio
              disabled = { false/*isGeneratingSubtitles*/ }
              value={subtitleFormat.format}
              className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-blue-400"
            >
              <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
            </Radio>
            <Label className="cursor-pointer">{subtitleFormat.format.toUpperCase()}</Label>
          </Field>
        ))}
        </RadioGroup>
      </div>
    )
}