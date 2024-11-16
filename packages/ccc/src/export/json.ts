import type { Card } from '../define'
import type { CharacterCardV3 } from './types/character_card_v3'

export const exportToJSON = (data: Card): CharacterCardV3 => ({
  data: {
    alternate_greetings: data.greetings?.slice(1) ?? [],
    character_version: data.version,
    creator: data.creator ?? '',
    creator_notes: data.notes ?? '',
    creator_notes_multilingual: data.notesMultilingual,
    description: '', // TODO: add description // FIXME: important
    extensions: {
      depth_prompt: {
        depth: 4,
        prompt: '',
        role: 'system',
      },
      fav: false,
      talkativeness: 0.5,
      ...data.extensions,
    },
    first_mes: data.greetings?.[0] ?? '',
    group_only_greetings: data.greetingsGroupOnly ?? [],
    mes_example: '', // TODO: add mes_example
    name: data.name,
    nickname: data.nickname,
    personality: '', // TODO: add personality
    post_history_instructions: '', // TODO: add post_history_instructions
    scenario: '', // TODO: add scenario
    system_prompt: '', // TODO: add system_prompt
    tags: [], // TODO: add tags
  },
  spec: 'chara_card_v3',
  spec_version: '3.0',
})
