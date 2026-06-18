export type ChapterMeta = {
  id: string
  /** Short label shown on the progress rail. */
  label: string
  /** Auto-advance time in ms. `Infinity` means the chapter rests (no advance). */
  duration: number
}

export const CHAPTERS: ChapterMeta[] = [
  { id: 'reality', label: 'The reality', duration: 7200 },
  { id: 'stakes', label: "What's at stake", duration: 8600 },
  { id: 'offer', label: 'The offer', duration: 8800 },
  { id: 'proof', label: 'How it works', duration: 8800 },
  { id: 'invite', label: "Let's begin", duration: Infinity },
]
