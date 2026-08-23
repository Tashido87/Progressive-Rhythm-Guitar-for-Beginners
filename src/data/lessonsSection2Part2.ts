import { LessonData } from '../types';

export const SECTION_2_PART2_LESSONS: LessonData[] = [
  {
    id: 33,
    section: 2,
    title: 'Rock Chords in Bar Form & Blues Pattern No. 3',
    titleMy: 'အခန်း ၃၃ - Barre ပုံစံ Rock Chords နှင့် Blues Pattern No. 3',
    subtitle: 'Fretboard အနှံ့ Rock Chords (G & G6) နှင့် Root 5 ဖြင့် စတင်သော Blues Pattern',
    overviewMy: 'Barre ပုံစံဖြင့် Rock Chords (G-G6, C-C6, D-D6) တီးခတ်နည်းနှင့် C မှ G Key များအတွက် အလွန်အသုံးဝင်သော Blues Pattern No. 3 ကို သင်ယူမည်။',
    keyPointsMy: [
      'G Rock Chord (Barre Form): Fret 3 တွင် ကြိုး ၆ (Finger 1) နှင့် ကြိုး ၅ Fret 5 (Finger 3)။ G6: ကြိုး ၅ Fret 7 (Finger 4)။',
      'C & C6 Rock Chords: Fret 8 တွင် တည်ရှိသည်။ D & D6: Fret 10 တွင် တည်ရှိသည်။',
      'Blues Pattern No. 3: Root 5 ဖြင့် စတင်သည်။ I = Root 5 မူလ Fret, IV = Root 6 (၂ Frets အောက်), V = Root 6 (မူလ Fret တူတူ)။',
      'Db, D, Eb, E, F, G Key များအတွက် လက်ချောင်းလှုပ်ရှားမှု သက်သာပြီး အလွန်အဆင်ပြေသည်။'
    ],
    chords: ['G', 'C', 'D'],
    rhythms: [
      {
        id: 'r_rock_shuffle_movable',
        name: 'Movable Rock Boogie (Exercise 71)',
        timeSignature: '4/4',
        descriptionEn: 'GG G6G GG G6G | VV VV VV VV',
        descriptionMy: 'Fretboard တစ်လျှောက် ရွှေ့လျားတီးနိုင်သော Rock Boogie ခတ်ကွက်',
        spokenCount: '1+ (G), 2+ (G6), 3+ (G), 4+ (G6)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 95
      }
    ],
    exercises: [
      {
        id: 'ex_71',
        title: 'Exercise 71 - Blues in G with Movable Rock Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၇၁ - G သံစဉ် ၁၂ Bar Blues (Barre Rock Chords)',
        exerciseNumber: 71,
        timeSignature: '4/4',
        recommendedBpm: 95,
        chords: [
          { chordName: 'G (3rd Fret)', bars: 4 },
          { chordName: 'C (8th Fret)', bars: 2 },
          { chordName: 'G (3rd Fret)', bars: 2 },
          { chordName: 'D (10th Fret)', bars: 1 },
          { chordName: 'C (8th Fret)', bars: 1 },
          { chordName: 'G (3rd Fret)', bars: 1 },
          { chordName: 'D (10th Fret)', bars: 1 }
        ],
        notesMy: 'Chuck Berry, AC/DC စတိုင် သံစဉ်အပြည့် ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Blues Pattern 3 Selection',
        nameMy: 'Blues Pattern ၃ မျိုး အသုံးပြုနည်း',
        explanationMy: 'Pattern 1: E မှ A Key များအတွက်၊ Pattern 2: F မှ C Key များအတွက်၊ Pattern 3: C မှ G Key များအတွက် အသုံးပြုသည်။',
        proTipMy: 'ဤ Pattern ၃ မျိုးကို သိရှိပါက ကမ္ဘာပေါ်ရှိ မည်သည့် Key ဖြင့်မဆို ၁၂ Bar Blues ကို ချက်ချင်း တီးခတ်နိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Finger 4 ဖြင့် ၂ Fret လှမ်းဖိရာတွင် လက်အရမ်းဆန့်ရခြင်း',
        fixMy: 'လက်မကို လည်ပင်းနောက်တွင် အောက်နားသို့ အနည်းငယ် လျှောချပေးပါက လက်ချောင်းများ ပိုမိုကျယ်ပြန့်စွာ ဖြန့်နိုင်မည်။'
      }
    ]
  },
  {
    id: 34,
    section: 2,
    title: 'Root 5 Minor Bar Chord (Bbm Formation)',
    titleMy: 'အခန်း ၃၄ - Root 5 Minor Bar Chord (Bbm ပုံစံ Barre Chords)',
    subtitle: 'Open Am ပုံစံကို 5th String Barre ဖြင့် ရွှေ့ထားသော Minor Chords',
    overviewMy: 'Root 5 (Am Formation) Minor Bar Chord (Bbm, Bm, Cm, C#m, Dm, Em) ဖွဲ့စည်းပုံနှင့် 16th Note Strums ကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 5 Minor Bar Chord သည် Open Am chord ပုံစံကို 5th string Root အတိုင်း Barre ဖိရွှေ့ထားခြင်း ဖြစ်သည်။',
      'Fret 1 = Bbm, Fret 2 = Bm, Fret 3 = Cm, Fret 4 = C#m, Fret 5 = Dm, Fret 7 = Em။',
      'Exercise 72 တွင် Beat 4 ၌ 16th note (4e+a) ပါဝင်သည်။',
      'Exercise 73 တွင် Beat 2 နှင့် 4 ၌ Percussive Strum (X) ပါဝင်သည်။'
    ],
    chords: ['Bbm_barre'],
    rhythms: [
      {
        id: 'r_root5_minor_16th',
        name: 'Root 5 Minor 16th Pattern (Exercise 72)',
        timeSignature: '4/4',
        descriptionEn: 'V^ (1+) V^ (2+) .^ (3+) V^V (4e+a)',
        descriptionMy: 'Beat 4 တွင် 16th note ပါဝင်သော စည်းချက်',
        spokenCount: '1+ 2+ 3+ 4-e-+-a',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'air-down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_72',
        title: 'Exercise 72 - Mixed Root 6 & Root 5 Minor Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၇၂ - Root 6 & 5 Minor ပေါင်းစပ်လေ့ကျင့်ခန်း',
        exerciseNumber: 72,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'B (Root 6 - 7th)', bars: 1 },
          { chordName: 'D#m (Root 5 - 6th)', bars: 1 },
          { chordName: 'A (Root 6 - 5th)', bars: 1 },
          { chordName: 'C#m (Root 5 - 4th)', bars: 1 },
          { chordName: 'G (Root 6 - 3rd)', bars: 1 },
          { chordName: 'Bm (Root 5 - 2nd)', bars: 1 },
          { chordName: 'F#7 (Root 6 - 2nd)', bars: 1 },
          { chordName: 'B (Root 5 - 2nd)', bars: 1 }
        ],
        notesMy: 'Root 6 Major/7th နှင့် Root 5 Minor Chords များ အပြန်အလှန် ချောမွေ့စွာ ကူးပြောင်းပါ။'
      },
      {
        id: 'ex_73',
        title: 'Exercise 73 - Em, D, C, Bm, Em Root 5 Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၇၃ - Em -> D -> C -> Bm Root 5 Minor Progression',
        exerciseNumber: 73,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'Em (Root 5 - 7th)', bars: 1 },
          { chordName: 'D (Root 5 - 5th)', bars: 1 },
          { chordName: 'C (Root 5 - 3rd)', bars: 1 },
          { chordName: 'Bm (Root 5 - 2nd)', bars: 1 },
          { chordName: 'Em (Root 5 - 7th)', bars: 1 }
        ],
        notesMy: 'Flamenco / Latin Pop သီချင်းများစွာ၏ ဂန္ထဝင် သံစဉ်တွဲ ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Am Shape Barre Shifting',
        nameMy: 'Am ပုံစံ Barre လျှောရွှေ့နည်း',
        explanationMy: 'Open Am chord ကို ဖမ်းထားသော Finger 2, 3, 4 ပုံစံအတိုင်း ထိန်းထားပြီး လက်ညှိုး (Finger 1) ဖြင့် 5th string မှ 1st string အထိ Barre ပိတ်ဖိကာ Fretboard ပေါ် လျှောရွှေ့ပါ။',
        proTipMy: '6th string (Low E) ကို လက်ညှိုးထိပ်ဖြင့် အသာထိကာ မမြည်အောင် Mute လုပ်ထားပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Root 5 Minor တွင် 2nd string (Finger 2) အသံသေနေခြင်း',
        fixMy: 'Finger 3 နှင့် 4 သည် 2nd string သို့ မထိခိုက်စေရန် လက်ချောင်းများကို မတ်မတ်ခုံးထားပါ။'
      }
    ]
  },
  {
    id: 35,
    section: 2,
    title: 'Basic Turnaround Patterns (Patterns 1, 2, 3, 4)',
    titleMy: 'အခန်း ၃၅ - Turnaround ပုံသေ Pattern ၄ မျိုး (Patterns 1, 2, 3, 4)',
    subtitle: 'Fretboard ပေါ်တွင် Turnaround 1 & 2 ကို မည်သည့် Key မဆို တီးနိုင်သော ပုံသေကားချပ်များ',
    overviewMy: 'I - vi - IV - V (Turnaround 1) နှင့် I - iii - IV - V (Turnaround 2) တို့ကို Fretboard တစ်လျှောက် Root 6 နှင့် Root 5 ပေါင်းစပ်၍ အလွယ်တကူ တီးနိုင်စေမည့် Pattern ၄ မျိုးကို သင်ယူမည်။',
    keyPointsMy: [
      'Turnaround 1 (I - vi - IV - V): ဥပမာ A key တွင် A -> F#m -> D -> E။',
      'Pattern 1 (Root 6 စတင်): I (Root 6) -> vi (Root 6, 3 frets အောက်) -> IV (Root 5, Fret တူတူ) -> V (Root 5, 2 frets အပေါ်)။ (G မှ D Key များအတွက် သင့်တော်သည်)။',
      'Pattern 2 (Root 5 စတင်): I (Root 5) -> vi (Root 5, 3 frets အောက်) -> IV (Root 6, 1 fret အပေါ်) -> V (Root 6, မူလ Fret တူတူ)။ (C မှ F Key များအတွက် သင့်တော်သည်)။',
      'Turnaround 2 (I - iii - IV - V): Pattern 3 (Root 6 စတင်) နှင့် Pattern 4 (Root 5 စတင်)။'
    ],
    chords: ['F_barre', 'Bb_barre', 'Bbm_barre'],
    rhythms: [
      {
        id: 'r_turnaround_4_patterns',
        name: 'Turnaround Movement Rhythm',
        timeSignature: '4/4',
        descriptionEn: 'Smooth continuous strumming for all keys',
        descriptionMy: 'Turnaround အားလုံးအတွက် စံပြ Pop ရစ်သမ်',
        spokenCount: '1+ 2+ 3+ 4+',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_turnaround_a',
        title: 'Turnaround 1 in Key of A (Pattern 1)',
        titleMy: 'Pattern 1 လက်တွေ့ - A Key Turnaround 1 (A -> F#m -> D -> E)',
        exerciseNumber: 74,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A (Root 6 - 5th)', bars: 1 },
          { chordName: 'F#m (Root 6 - 2nd)', bars: 1 },
          { chordName: 'D (Root 5 - 5th)', bars: 1 },
          { chordName: 'E (Root 5 - 7th)', bars: 1 }
        ],
        notesMy: 'Prince, Ben E. King, John Lennon တို့၏ ဂန္ထဝင် သီချင်းပုံစံဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Turnaround Shape Geometry',
        nameMy: 'Turnaround လက်ကွက် ပုံသေ အကွာအဝေး',
        explanationMy: 'Major Chord မှ Minor (vi) သို့ ကူးရာတွင် ၃ Fret အောက်သို့ ဆင်းရပြီး၊ IV Chord သည် အောက်ကြိုး Fret တူတူတွင် ရှိသည်ဟု စိတ်ထဲ မှတ်ထားပါ။',
        proTipMy: 'Key မည်မျှပင် ပြောင်းစေကာမူ လက်ချောင်းရွှေ့သည့် ပုံသေအကွာအဝေးသည် မပြောင်းလဲပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Key အသစ်တစ်ခုတွင် Turnaround စတီးရာတွင် Fret နေရာ မှားယွင်းခြင်း',
        fixMy: 'ပထမဆုံး I Chord ၏ Root note တည်နေရာ (Root 6 သို့မဟုတ် Root 5) ကို အရင်ရှာပြီးမှ Pattern 1 သို့မဟုတ် 2 ကို ရွေးချယ်ပါ။'
      }
    ]
  },
  {
    id: 36,
    section: 2,
    title: 'Combined Right Hand Techniques (Dampening + Staccato Up-Strums)',
    titleMy: 'အခန်း ၃၆ - ပေါင်းစပ် လက်ယာလက်နည်းစနစ်များ (Dampening + Staccato Up-Strums)',
    subtitle: 'Down တွင် Palm Dampening နှင့် Beat 2, 4 အတက်တွင် Staccato အသံတို ရိုက်ခတ်ခြင်း',
    overviewMy: 'Rock & Pop တွင် အလွန်ဆွဲဆောင်မှုရှိသော Rhythm နည်းစနစ်: Beat 1+, 3+ တွင် Dampening (D) ခတ်ပြီး Beat 2, 4 တွင် ကြိုး ၁၊ ၂ ကိုသာ Staccato Up Strum ဖြင့် လျှပ်တပြက် ခတ်နည်းကို သင်ယူမည်။',
    keyPointsMy: [
      'Dampening + Staccato Combo: Beat 1+ နှင့် 3+ တွင် Bass ကြိုးများကို Palm Dampening ဖြင့် Chug ခတ်ပြီး၊ Beat 2 နှင့် 4 တွင် ကြိုး ၁၊ ၂ ကိုသာ Staccato Up Strum ဖြင့် တိုတိုတုတ်တုတ် ဖြတ်ခတ်သည်။',
      'ဤပေါင်းစပ်မှုသည် ဒရမ်၏ Bass Drum (Dampened) နှင့် Snare Drum (Staccato Up) အတိုင်း တူညီသော Groove ကို ဖန်တီးပေးသည်။',
      'Staccato Up Strum ခတ်ရာတွင် ကြိုး ၁ နှင့် ၂ (Treble strings) ကိုသာ တိကျစွာ ခတ်ရပါမည်။'
    ],
    chords: ['E', 'F_barre'],
    rhythms: [
      {
        id: 'r_damp_staccato_up',
        name: 'Dampened Bass + Staccato Up (Exercise 74)',
        timeSignature: '4/4',
        descriptionEn: 'DD (1+) ^staccato (2) DD (3+) ^staccato (4)',
        descriptionMy: '1+, 3+ တွင် Palm Mute ခတ်ပြီး 2, 4 တွင် Staccato Up Strum ခတ်သော Groove',
        spokenCount: 'Chug-Chug, POP(2), Chug-Chug, POP(4)',
        beats: [
          { count: '1', type: 'dampened-down', accent: true },
          { count: '+', type: 'dampened-down' },
          { count: '2', type: 'up', accent: true }, // Staccato up on strings 1 & 2
          { count: '3', type: 'dampened-down', accent: true },
          { count: '+', type: 'dampened-down' },
          { count: '4', type: 'up', accent: true }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_75',
        title: 'Exercise 75 - E, G, A, G Groove Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၇၅ - E (Open) -> G (Root 6) -> A (Root 6) -> G Groove သံစဉ်တွဲ',
        exerciseNumber: 75,
        timeSignature: '4/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'E (Open)', bars: 1 },
          { chordName: 'G (Root 6 - 3rd)', bars: 1 },
          { chordName: 'A (Root 6 - 5th)', bars: 1 },
          { chordName: 'G (Root 6 - 3rd)', bars: 1 }
        ],
        notesMy: 'Beat 2 နှင့် 4 တွင် ကြိုး ၁ နှင့် ၂ ကိုသာ ပေါ့ပါးစွာ အပေါ်သို့ ပင့်ခတ်ပြီး ချက်ချင်း အသံဖြတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Bass/Treble Rhythm Separation',
        nameMy: 'Bass နှင့် Treble ကြိုးများ ခွဲခြားခတ်နည်း',
        explanationMy: 'လက်ယာလက် ပစ်ခ်သည် အောက်သို့ဆင်းချိန်တွင် Bass ကြိုး ၆၊ ၅ ကိုသာ ထိပြီး၊ အပေါ်သို့တက်ချိန်တွင် Treble ကြိုး ၁၊ ၂ ကိုသာ ထိခတ်ခြင်းဖြင့် အလွန်ခေတ်မီသော စည်းချက်ကို ရရှိစေသည်။',
        proTipMy: 'Modern Rock နှင့် Funk ဂစ်တာသမားတိုင်း မဖြစ်မနေ အသုံးပြုသော နည်းစနစ်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Up Strum ခတ်ရာတွင် ကြိုး ၆ ချောင်းစလုံးကို ထိခတ်မိခြင်း',
        fixMy: 'Up Strum လှုပ်ရှားမှုကို အလွန်သေးငယ်စေပြီး ကြိုး ၁ နှင့် ၂ အနားတွင်သာ ပစ်ခ်ကို လျင်မြန်စွာ ကလစ်လုပ်ပါ။'
      }
    ]
  },
  {
    id: 37,
    section: 2,
    title: 'Droning Strings & Chord Construction (Major Chords: 1-3-5)',
    titleMy: 'အခန်း ၃၇ - Droning Strings နှင့် Major Chord တည်ဆောက်ပုံ သီအိုရီ',
    subtitle: 'ကြိုးသံ ဆက်တိုက်မြည်စေခြင်း (Drone) နှင့် 1 - 3 - 5 Major Formula',
    overviewMy: 'Rock တွင် သုံးသော Droning String (အသံမပြတ် မြည်နေသော ကြိုး) နှင့် Major Scale မှ Major Chord တည်ဆောက်ပုံ သီအိုရီ (1 - 3 - 5) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Droning String: အခြားကြိုးများကို Mute သို့မဟုတ် ပြောင်းလဲတီးနေစဉ် 5th string (Open A) စသည့် ကြိုးတစ်ချောင်းကို အသံမပြတ် မြည်နေစေခြင်း ဖြစ်သည်။',
      'Major Chord Construction Formula: I - III - V (1st, 3rd, 5th notes of the Major Scale)။',
      'ဥပမာ C Major Chord = C - E - G (C Scale ၏ 1st, 3rd, 5th)။',
      'D Major Chord = D - F# - A (D Scale ၏ 1st, 3rd, 5th)။',
      'G Major Chord = G - B - D, F Major Chord = F - A - C, A Major Chord = A - C# - E။'
    ],
    chords: ['F_barre', 'A7', 'Bb7', 'G7', 'C7'],
    rhythms: [
      {
        id: 'r_droning_rock',
        name: 'Droning String Rock Rhythm (Exercise 80)',
        timeSignature: '4/4',
        descriptionEn: '5th string drones while 4th is deadened',
        descriptionMy: '5th string အသံမပြတ်မြည်နေစေသော Rock Rhythm',
        spokenCount: '1+ 2+ 3+ 4+',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'percussive-down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'percussive-down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_79',
        title: 'Exercise 79 - All Root 6 Bar Blues in F',
        titleMy: 'လေ့ကျင့်ခန်း ၇၉ - Root 6 Bar Chords ဖြင့် F Blues (F, A7, Bb7, G7, C7)',
        exerciseNumber: 79,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'F', bars: 1 },
          { chordName: 'A7 (5th)', bars: 1 },
          { chordName: 'Bb7 (6th)', bars: 1 },
          { chordName: 'G7 (3rd)', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C7 (8th)', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C7 (8th)', bars: 1 }
        ],
        notesMy: 'Root 6 Bar Chords အားလုံး၏ တည်နေရာကို ကျွမ်းကျင်စွာ ရွှေ့ပြောင်းတီးခတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Chord Formula Application (1 - 3 - 5)',
        nameMy: 'Major Chord ပုံသေနည်း တွက်ထုတ်ပုံ',
        explanationMy: 'မည်သည့် Major Scale မဆို 1st, 3rd, 5th Notes သုံးခုကို ယူလိုက်ပါက ထို Key ၏ Major Chord ဖြစ်လာသည်။ အသံ ၃ သံအနက် မည်သည့်အသံမဆို အကြိမ်ကြိမ် ထပ်ခတ်နိုင်သည်။',
        proTipMy: 'Open C Chord တွင် C Note ၂ လုံး၊ E Note ၃ လုံး၊ G Note ၁ လုံး စုစုပေါင်း အသံ ၆ သံ မြည်သော်လည်း Note အမျိုးအစားမှာ C, E, G သုံးမျိုးသာ ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Major Scale မှ 3rd Note သို့မဟုတ် 5th Note ရှာမရခြင်း',
        fixMy: 'Major Scale အစီအစဉ်အတိုင်း ရေတွက်ပါ (ဥပမာ G Major: 1=G, 2=A, 3=B, 4=C, 5=D -> G Major Chord = G, B, D)။'
      }
    ]
  },
  {
    id: 38,
    section: 2,
    title: 'Dominant 7th Bar Chord (Root 5) & Reggae Rhythms',
    titleMy: 'အခန်း ၃၈ - Dominant 7th Bar Chord (Root 5) နှင့် Reggae Rhythms (ဂျမေကာစတိုင်)',
    subtitle: 'Bb7, C7, D7 Root 5 Barre နှင့် Beat 2, 4 တွင် အလေးပေးခတ်သော Reggae စည်းချက်',
    overviewMy: 'Root 5 Dominant 7th (Bb7, C7, D7) Bar Chord နှင့် Beat 2 နှင့် 4 တွင် အလေးပေး (Off-beat accent) ခတ်သော ကမ္ဘာကျော် Reggae Rhythms များကို သင်ယူမည်။',
    keyPointsMy: [
      'Root 5 Dominant 7th: Open A7 chord ပုံစံကို 5th string Root အတိုင်း Barre ဖိရွှေ့ထားခြင်း ဖြစ်သည်။',
      'Fret 1 = Bb7, Fret 3 = C7, Fret 5 = D7, Fret 7 = E7။',
      'Reggae Rhythms: ပုံမှန် 4/4 တွင် Beat 1 နှင့် 3 အား အလေးပေးသော်လည်း Reggae တွင် Beat 2 နှင့် 4 အပေါ်သို့ အလေးပေး (Chop / Skank) ခတ်သည်။',
      'Beat 1 နှင့် 3 တွင် Rest (တိတ်ဆိတ်) ပြီး Beat 2 နှင့် 4 တွင် Staccato Strum ဖြင့် ခတ်သည်။'
    ],
    chords: ['Bb7_barre', 'Fm_barre'],
    rhythms: [
      {
        id: 'r_reggae_basic',
        name: 'Classic Reggae Chop (Exercise 84)',
        timeSignature: '4/4',
        descriptionEn: 'Rest on 1 & 3, Staccato on 2 & 4 (Chop on off-beats)',
        descriptionMy: 'Beat 1, 3 တွင် နားပြီး Beat 2, 4 တွင် Staccato ဖြင့် ခတ်သော Bob Marley စတိုင် Reggae',
        spokenCount: 'Rest(1), CHOP(2), Rest(3), CHOP(4)',
        beats: [
          { count: '1', type: 'rest', deadened: true },
          { count: '2', type: 'staccato-down', accent: true },
          { count: '3', type: 'rest', deadened: true },
          { count: '4', type: 'staccato-down', accent: true }
        ],
        defaultBpm: 80
      },
      {
        id: 'r_reggae_bass_chop',
        name: 'Reggae Bass + Chop (Exercise 86)',
        timeSignature: '4/4',
        descriptionEn: 'Bass on 1, Chop on 2, Rest on 3, Chop on 4',
        descriptionMy: 'Beat 1 တွင် Bass Note ခတ်ပြီး Beat 2, 4 တွင် Skank Chop ခတ်သော ပုံစံ',
        spokenCount: 'Bass(1), V^(2+), Rest(3), ^(4)',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 6 },
          { count: '2', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '3', type: 'rest', deadened: true },
          { count: '4', type: 'up', accent: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_83',
        title: 'Exercise 83 - 12 Bar Blues in G with Passing 7th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၈၃ - Root 5 & 6 7th Chords ပါဝင်သော G Blues',
        exerciseNumber: 83,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G (Root 6)', bars: 1 },
          { chordName: 'C (Root 5)', bars: 1 },
          { chordName: 'G (Root 6)', bars: 1 },
          { chordName: 'G7 (Root 6)', bars: 1 },
          { chordName: 'C (Root 5)', bars: 1 },
          { chordName: 'C7 (Root 5)', bars: 1 },
          { chordName: 'G (Root 6)', bars: 1 },
          { chordName: 'G7 (Root 6)', bars: 1 },
          { chordName: 'D7 (Root 5)', bars: 1, subChords: [{ chordName: 'D7', beats: 2 }, { chordName: 'Db7', beats: 1 }, { chordName: 'C7', beats: 1 }] },
          { chordName: 'G (Root 6)', bars: 1, subChords: [{ chordName: 'Ab7', beats: 1 }, { chordName: 'G', beats: 3 }] },
          { chordName: 'D7 (Root 5)', bars: 2 }
        ],
        notesMy: 'D7 -> Db7 -> C7 နှင့် Ab7 -> G စသည့် Chromatic Passing 7th chords များကို သတိပြုပါ။'
      },
      {
        id: 'ex_85_reggae',
        title: 'Exercise 85 - Minor Reggae Progression (Gm - Cm - Dm)',
        titleMy: 'လေ့ကျင့်ခန်း ၈၅ - Gm -> Cm -> Dm Minor Reggae သံစဉ်တွဲ',
        exerciseNumber: 85,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'Gm (Root 6 - 3rd)', bars: 1 },
          { chordName: 'Cm (Root 5 - 3rd)', bars: 1 },
          { chordName: 'Gm (Root 6 - 3rd)', bars: 1 },
          { chordName: 'Dm (Root 5 - 5th)', bars: 1 }
        ],
        notesMy: 'Bob Marley, UB40 စတိုင် စစ်မှန်သော Reggae Groove ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Reggae Off-Beat Skank / Chop',
        nameMy: 'Reggae စည်းဝါး Chop ခတ်နည်း',
        explanationMy: 'Beat 2 နှင့် 4 တွင် ခတ်ပြီးသည်နှင့် လက်ဝဲလက်ဖိအားကို ချက်ချင်း လွှတ်ကာ လက်ယာလက်ဝါးဖြင့် အုပ်လိုက်ခြင်းဖြင့် Reggae ၏ ထူးခြားသော ကြွရွပြတ်တောင်းသည့် စည်းချက် ထွက်ပေါ်သည်။',
        proTipMy: 'Reggae တွင် ခြေထောက်ဖြင့် Beat 1, 2, 3, 4 ကို တသမတ်တည်း စည်းလိုက်ရန် အလွန်အရေးကြီးသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Reggae မဆန်ဘဲ Beat 1 တွင် ခတ်မိသွားခြင်း',
        fixMy: 'Beat 1 တွင် ပါးစပ်မှ "One (နား)" ဟု ဆိုပြီး လက်ယာလက်ကို လေထဲတွင်သာ ချထားပါ။ Beat 2 ကျမှ ကြိုးကို စတင်ခတ်ပါ။'
      }
    ]
  },
  {
    id: 39,
    section: 2,
    title: 'Arpeggio Picking (532 123 Order & Triplet Feel)',
    titleMy: 'အခန်း ၃၉ - Arpeggio Picking (သံစဉ်တစ်လုံးချင်း တီးခတ်နည်း)',
    subtitle: 'ကြိုး ၅-၃-၂ ၁-၂-၃ အစီအစဉ်အတိုင်း Triplet စည်းချက်ဖြင့် သံစဉ်ဖြန့်တီးနည်း',
    overviewMy: 'Chord တစ်ခုလုံးကို ပြိုင်တူ မခတ်ဘဲ တစ်ကြိုးချင်း အစီအစဉ်အတိုင်း သံစဉ်ဖြန့်တီးသော Arpeggio Picking (Fingerpicking/Pick Pattern: Root -> 3 2 1 2 3) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Arpeggio ဆိုသည်မှာ Chord တွင် ပါဝင်သော Notes များကို တစ်လုံးချင်း စီတန်း၍ တီးခတ်ခြင်း (Broken Chord) ဖြစ်သည်။',
      'အခြေခံ Arpeggio Pattern: Root Bass Note -> ကြိုး ၃ -> ကြိုး ၂ -> ကြိုး ၁ -> ကြိုး ၂ -> ကြိုး ၃ (Pattern: Bass 3 2 1 2 3)။',
      'Triplet Rhythm အတိုင်း 1+a 2+a 3+a 4+a ရေတွက်ရသည်။',
      'Acoustic Ballads, Folk, Slow Rock သီချင်းများတွင် အထူးနားဝင်ချိုစေသည်။'
    ],
    chords: ['C', 'Am', 'Dm', 'E7', 'F_barre'],
    rhythms: [
      {
        id: 'r_arpeggio_triplet',
        name: 'Standard Arpeggio Picking (Exercise 88)',
        timeSignature: '4/4',
        descriptionEn: 'Strings 5-3-2 1-2-3 (1+a 2+a 3+a 4+a)',
        descriptionMy: 'ကြိုး ၅-၃-၂ ၁-၂-၃ အစီအစဉ်အတိုင်း တီးသော Triplet Arpeggio',
        spokenCount: '5-3-2, 1-2-3, 5-3-2, 1-2-3',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 5, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '2', type: 'up', triplet: true },
          { count: '+', type: 'up', triplet: true },
          { count: 'a', type: 'up', triplet: true },
          { count: '3', type: 'bass-pick', accent: true, bassString: 5, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '4', type: 'up', triplet: true },
          { count: '+', type: 'up', triplet: true },
          { count: 'a', type: 'up', triplet: true }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_89',
        title: 'Exercise 89 - Open Chord Arpeggio Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၈၉ - Am, C, D, F, E7 Arpeggio သံစဉ်တွဲ',
        exerciseNumber: 89,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'Am (Bass string 5)', bars: 1 },
          { chordName: 'C (Bass string 5)', bars: 1 },
          { chordName: 'D (Bass string 4)', bars: 1 },
          { chordName: 'F (Bass string 4)', bars: 1 },
          { chordName: 'Am (Bass string 5)', bars: 1 },
          { chordName: 'C (Bass string 5)', bars: 1 },
          { chordName: 'E7 (Bass string 6)', bars: 1 },
          { chordName: 'Am (Bass string 5)', bars: 1 }
        ],
        notesMy: 'Chord တစ်ခုချင်းစီ၏ Root Bass ကြိုးကို တိကျစွာ ရွေးချယ်ခတ်ပါ (E=6, A=5, D=4)။'
      }
    ],
    techniques: [
      {
        nameEn: 'Alternate Picking / Arpeggio Flow',
        nameMy: 'Arpeggio ခတ်ရာတွင် Pick ဦးတည်ချက်',
        explanationMy: 'Bass ကြိုးနှင့် 3rd, 2nd ကြိုးများကို အောက်သို့ (Down) ခတ်ပြီး၊ 1st, 2nd, 3rd ကြိုးများကို အပေါ်သို့ (Up) ပြန်ဆွဲခတ်ခြင်းဖြင့် အလွန်ချောမွေ့သော သံစဉ်လှိုင်း ဖြစ်ပေါ်စေသည်။',
        proTipMy: 'လက်ဝဲလက် Chord ဖမ်းထားမှုသည် အသံအားလုံး အဆုံးအထိ မြည်နေစေရန် လက်ချောင်းများကို မတ်မတ်ခုံးထားပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'ကြိုးမှားခတ်မိခြင်း သို့မဟုတ် အသံတုန်ခါခြင်း',
        fixMy: 'လက်ယာလက် လက်သန်း သို့မဟုတ် လက်သူကြွယ်ကို ဂစ်တာ Pickguard အောက်တွင် အသာထောက်ထားပြီး တည်ငြိမ်မှု ယူပါ။'
      }
    ]
  },
  {
    id: 40,
    section: 2,
    title: 'Arpeggio with Bass Runs & Chord Construction (Minor: 1-b3-5)',
    titleMy: 'အခန်း ၄၀ - Arpeggio နှင့် Bass Runs ပေါင်းစပ်ခြင်း၊ Minor Chord သီအိုရီ',
    subtitle: 'Arpeggio တီးရင်း Beat 4 တွင် Bass Run ထည့်ခြင်းနှင့် 1 - b3 - 5 Minor Formula',
    overviewMy: 'Arpeggio Picking ပြုလုပ်နေစဉ် Beat 4 တိုင်းတွင် Bass Note Run ထည့်သွင်းပုံနှင့် Minor Chord တည်ဆောက်ပုံ သီအိုရီ (1 - b3 - 5) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Arpeggio + Bass Runs (Exercise 94): Beat 1, 2, 3 တွင် Arpeggio (Root - 3 - 2 - 1 - 2 - 3) တီးပြီး Beat 4 တွင် နောက် Chord သို့ ကူးမည့် Bass Note Run ကို ထည့်သွင်းသည်။',
      'Glide Technique (Wavy Line $V): နောက်ဆုံး Bar တွင် ပစ်ခ်ကို ကြိုး ၆ ချောင်းစလုံးပေါ် ဖြည်းညှင်းစွာ လျှောချ၍ တီးခတ်သည်။',
      'Minor Chord Construction Formula: I - bIII - V (Major Chord ၏ 3rd note အား Semitone လျှော့ချထားခြင်း)။',
      'ဥပမာ C Major (C - E - G) -> C Minor (C - Eb - G)။ E Major (E - G# - B) -> E Minor (E - G - B)။',
      'Am = A - C - E, Dm = D - F - A, Gm = G - Bb - D, Fm = F - Ab - C။'
    ],
    chords: ['G', 'Em', 'C', 'D'],
    rhythms: [
      {
        id: 'r_arpeggio_bass_run',
        name: 'Arpeggio + Beat 4 Bass Run',
        timeSignature: '4/4',
        descriptionEn: 'Arpeggio on 1-3, Single bass run on beat 4',
        descriptionMy: 'Beat 1, 2, 3 တွင် Arpeggio ခတ်ပြီး Beat 4 တွင် Bass Run ထည့်ခတ်ပါ',
        spokenCount: '1(arp), 2(arp), 3(arp), 4(bass-run)',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 6 },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'bass-pick', bassString: 5 }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_94',
        title: 'Exercise 94 - Arpeggio with Connecting Bass Runs (G - Em - C - D)',
        titleMy: 'လေ့ကျင့်ခန်း ၉၄ - Connecting Bass Runs ပါဝင်သော Arpeggio (G - Em - C - D)',
        exerciseNumber: 94,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'G', bars: 1 }
        ],
        notesMy: 'G မှ Em သို့ ကူးရာတွင် Beat 4 ၌ 5th string (3 -> 2 -> 0) Bass run ထည့်ပါ။ နောက်ဆုံး Bar တွင် Glide Strum ($V) ဖြင့် အဆုံးသတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Glide Strum Technique ($V)',
        nameMy: 'ပစ်ခ် လျှောချခတ်နည်း (Glide Strum)',
        explanationMy: 'ပုံမှန် Strum ကဲ့သို့ မြန်မြန်မခတ်ဘဲ ကြိုးတစ်ချောင်းချင်းစီ၏ အသံကို သီးခြားကြားရလောက်အောင် ပစ်ခ်ကို ကြိုး ၆ မှ ၁ အထိ ဖြည်းဖြည်းချင်း လျှောချခတ်ခြင်း ဖြစ်သည်။',
        proTipMy: 'သီချင်း အဆုံးသတ်ရာတွင် အလွန် ခမ်းနားလေးနက်သော အသံကို ဖန်တီးပေးသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Major နှင့် Minor Chord အသံကွဲပြားမှုကို နားဖြင့် ခွဲခြားရ ခက်ခဲခြင်း',
        fixMy: '3rd Note ကိုသာ အာရုံစိုက် နားထောင်ပါ။ 3rd Note မြင့်နေပါက တက်ကြွ (Major) ပြီး၊ Semitone နိမ့်ကျသွားပါက လွမ်းဆွေးနူးညံ့ (Minor) ဖြစ်သွားသည်။'
      }
    ]
  },
  {
    id: 41,
    section: 2,
    title: 'Minor 7th Chords (Em7, Am7, Fm7, Bbm7) & Chord Construction',
    titleMy: 'အခန်း ၄၁ - Minor 7th Chords (Em7, Am7, Fm7, Bbm7) နှင့် သီအိုရီ',
    subtitle: '1 - b3 - 5 - b7 Minor 7th Formula နှင့် Dominant 7th (1-3-5-b7) တည်ဆောက်ပုံ',
    overviewMy: 'R&B, Soul, Jazz နှင့် Pop တွင် မရှိမဖြစ် Minor 7th Chords (Em7, Am7, Fm7, Bbm7) နှင့် Dominant 7th / Minor 7th တည်ဆောက်ပုံ သီအိုရီများကို သင်ယူမည်။',
    keyPointsMy: [
      'Dominant 7th Formula: I - III - V - bVII (Major Chord + Flattened 7th note)။ ဥပမာ A7 = A - C# - E - G။',
      'Minor 7th Formula: I - bIII - V - bVII (Minor Chord + Flattened 7th note)။ ဥပမာ Am7 = A - C - E - G, Em7 = E - G - B - D။',
      'Root 6 Minor 7th (Fm7): Root 6 Minor မှ လက်သန်း (Finger 4) ကို ကြွလိုက်ခြင်း ဖြစ်သည်။',
      'Root 5 Minor 7th (Bbm7): Root 5 Minor မှ လက်သန်း (Finger 4) ကို ကြွလိုက်ခြင်း ဖြစ်သည်။'
    ],
    chords: ['Fm_barre', 'Bbm_barre', 'A7', 'E7'],
    rhythms: [
      {
        id: 'r_minor7_smooth',
        name: 'Minor 7th Jazz-Pop Rhythm (Exercise 95)',
        timeSignature: '4/4',
        descriptionEn: 'V (1), V (2), V^ (3+), V^ (4+)',
        descriptionMy: 'Minor 7th အတွက် နူးညံ့ချောမွေ့သော Pop ရစ်သမ်',
        spokenCount: '1, 2, 3-and, 4-and',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_95',
        title: 'Exercise 95 - Minor 7th Sliding Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၉၅ - Minor 7th လျှောရွှေ့သံစဉ်တွဲ (G#m7 -> Gm7 -> F#m7 -> B7)',
        exerciseNumber: 95,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'E (Open)', bars: 1 },
          { chordName: 'G#m7 (4th)', bars: 1, subChords: [{ chordName: 'G#m7', beats: 2 }, { chordName: 'Gm7', beats: 1 }, { chordName: 'F#m7', beats: 1 }] },
          { chordName: 'F#m7 (2nd)', bars: 1 },
          { chordName: 'B7 (Root 5 - 2nd)', bars: 1 },
          { chordName: 'F (1st)', bars: 1 },
          { chordName: 'Dm7 (Root 5 - 5th)', bars: 1, subChords: [{ chordName: 'Dm7', beats: 2 }, { chordName: 'Dbm7', beats: 1 }, { chordName: 'Cm7', beats: 1 }] },
          { chordName: 'C7 (3rd)', bars: 1 },
          { chordName: 'F (1st)', bars: 1 }
        ],
        notesMy: 'G#m7 -> Gm7 -> F#m7 နှင့် Dm7 -> Dbm7 -> Cm7 စသည့် Semitone အောက်ဆင်း လျှောရွှေ့မှုများကို သတိပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Lifting Pinky for Minor 7th',
        nameMy: 'လက်သန်းကြွ၍ Minor 7th အသံ ရယူနည်း',
        explanationMy: 'Minor Bar Chord တွင် လက်သန်း (Finger 4) ကို ကြွလိုက်ပါက လက်ညှိုး Barre က b7th note ကို အစားထိုး အသံထွက်စေသည်။',
        proTipMy: 'လက်ချောင်း ၃ ချောင်းတည်းဖြင့် ဖိရသောကြောင့် လက်ညောင်းမှု သက်သာပြီး အလွန်ခေတ်မီသော အသံထွက်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'm7 တွင် လက်သန်းကြွလိုက်သောအခါ ကြိုး ၄ အသံ ပျောက်သွားခြင်း',
        fixMy: 'လက်ညှိုး Barre သည် ကြိုး ၄ ပေါ်တွင် လုံလောက်သော ဖိအားရှိစေရန် လက်မအနေအထားကို ထိန်းညှိပါ။'
      }
    ]
  },
  {
    id: 42,
    section: 2,
    title: 'Major 6th Chords (F6, Bb6) & Relative Minor Relationship',
    titleMy: 'အခန်း ၄၂ - Major 6th Chords (F6, Bb6) နှင့် Relative Minor ဆက်နွယ်မှု',
    subtitle: '1 - 3 - 5 - 6 Formula၊ 6th Chords ၁၂ Bar Blues နှင့် F6 = Dm7 သဘောတရား',
    overviewMy: 'Major 6th Chords (F6, Bb6) ဖွဲ့စည်းပုံ၊ 6th Chords ပါဝင်သော ၁၂ Bar Blues နှင့် Major 6th သည် Relative Minor 7th နှင့် အသံတူညီသော သီအိုရီကို သင်ယူမည်။',
    keyPointsMy: [
      'Major 6th Formula: I - III - V - VI (1st, 3rd, 5th, 6th)။ ဥပမာ F6 = F - A - C - D, Bb6 = Bb - D - F - G။',
      'Relative Minor Relationship: F6 တွင် ပါဝင်သော Notes (F-A-C-D) သည် Dm7 တွင် ပါဝင်သော Notes (D-F-A-C) နှင့် အတိအကျ တူညီသည်။ ထို့ကြောင့် Major 6th နှင့် Relative Minor 7th တို့သည် အချင်းချင်း အစားထိုး (Interchangeable) သုံးနိုင်သည်။',
      '12 Bar Blues with 6ths (Exercise 96): G -> G6 -> G7 -> G6 ပုံစံဖြင့် Bar တိုင်းတွင် Staccato ဖြင့် တီးခတ်သည်။',
      'Rock Form 7th Chords (A, A6, A7 - Exercise 97)။'
    ],
    chords: ['E6', 'A6', 'G', 'C', 'D'],
    rhythms: [
      {
        id: 'r_staccato_6th_blues',
        name: 'Staccato 6th Blues (Exercise 96)',
        timeSignature: '4/4',
        descriptionEn: '4 Staccato downs per bar: G, G6, G7, G6',
        descriptionMy: 'Beat တိုင်းတွင် Staccato ဖြင့် Chord ပြောင်းသော Rock n Roll စည်းချက်',
        spokenCount: '1(G), 2(G6), 3(G7), 4(G6)',
        beats: [
          { count: '1', type: 'staccato-down', accent: true },
          { count: '2', type: 'staccato-down' },
          { count: '3', type: 'staccato-down' },
          { count: '4', type: 'staccato-down' }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_96',
        title: 'Exercise 96 - 12 Bar Blues with 6th and 7th Bar Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၉၆ - 6th & 7th Bar Chords ပါဝင်သော ၁၂ Bar Blues in G',
        exerciseNumber: 96,
        timeSignature: '4/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'G (Root 6)', bars: 4 },
          { chordName: 'C (Root 5)', bars: 2 },
          { chordName: 'G (Root 6)', bars: 2 },
          { chordName: 'D (Root 5)', bars: 1 },
          { chordName: 'C (Root 5)', bars: 1 },
          { chordName: 'G (Root 6)', bars: 1 },
          { chordName: 'D (Root 5)', bars: 1 }
        ],
        notesMy: 'Bar တိုင်းတွင် G -> G6 -> G7 -> G6 (သို့မဟုတ် C -> C6 -> C7 -> C6) ကို လက်သန်းဖြင့် စည်းချက်ကျကျ ပြောင်းပါ။'
      },
      {
        id: 'ex_97',
        title: 'Exercise 97 - Rock 7th Progression (A - A6 - A7 - A6)',
        titleMy: 'လေ့ကျင့်ခန်း ၉၇ - A -> A6 -> A7 -> A6 Rock Form သံစဉ်တွဲ',
        exerciseNumber: 97,
        timeSignature: '4/4',
        recommendedBpm: 95,
        chords: [
          { chordName: 'A (Rock Form)', bars: 4 }
        ],
        notesMy: 'ကြိုး ၄ ပေါ်တွင် Fret 2 (A) -> Fret 4 (A6) -> Fret 5 (A7) -> Fret 4 (A6) သို့ လက်သန်းဖြင့် လှမ်းဖိပါ။'
      }
    ],
    techniques: [
      {
        nameEn: '6th Chord vs Relative Minor 7th Equivalence',
        nameMy: '6th Chord နှင့် m7th အသံတူညီမှု သဘောတရား',
        explanationMy: 'သီချင်းတစ်ပုဒ်တွင် C6 ပါရှိပါက Am7 ဖြင့် အစားထိုး တီးနိုင်ပြီး၊ F6 ပါရှိပါက Dm7 ဖြင့် အစားထိုး တီးနိုင်သည်။',
        proTipMy: 'Jazz နှင့် Swing ဂီတတွင် ဤနည်းစနစ်ကို သုံး၍ Chord အရောင် ကြွယ်ဝစေသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Fret 5 (7th) သို့ လက်သန်း မမှီခြင်း',
        fixMy: 'လက်ဖဝါးကို လည်ပင်းနှင့် ကပ်မထားဘဲ အနည်းငယ် ခွာပေးပြီး လက်ကောက်ဝတ်ကို ရှေ့သို့ တွန်းပေးပါ။'
      }
    ]
  },
  {
    id: 43,
    section: 2,
    title: 'Rock Triplet Rhythm & Rock Blues in B',
    titleMy: 'အခန်း ၄၃ - Rock Triplet Rhythm နှင့် B သံစဉ် Rock Blues',
    subtitle: '1+a 2+a 3+a 4+a Triplet Shuffle ဖြင့် Rock Chords တီးခတ်ခြင်း',
    overviewMy: 'Rock ဂီတတွင် အလွန်မြူးကြွသော Triplet Shuffle Rhythm (1+a 2+a 3+a 4+a) နှင့် Root 6 & 5 Rock Chords ဖြင့် B Key Rock Blues ကို သင်ယူမည်။',
    keyPointsMy: [
      'Rock Triplet Rhythm: 1 Beat လျှင် ၃ ချက်နှုန်းဖြင့် Down Strum ဖြင့် ခတ်ပြီး လက်ယာလက်ဝါးဖြင့် Staccato Deadening ပြုလုပ်သည်။',
      'Blues in B: B (Root 6 Fret 7), E (Root 5 Fret 7), F# (Root 5 Fret 9)။',
      'Root 6 မှ Root 5 သို့ ကူးရာတွင် လက်ညှိုး Barre ကို မကြွဘဲ လျင်မြန်စွာ ကူးပြောင်းနိုင်သည်။'
    ],
    chords: ['G', 'C', 'D'],
    rhythms: [
      {
        id: 'r_rock_triplet_shuffle',
        name: 'Rock Triplet Shuffle (Exercise 99)',
        timeSignature: '4/4',
        descriptionEn: 'VVV VVV VVV VVV (1+a 2+a 3+a 4+a with staccato mute)',
        descriptionMy: 'Rock Triplet Shuffle စည်းချက် (1+a: B, 2+a: B6, 3+a: B, 4+a: B6)',
        spokenCount: '1-and-a (B), 2-and-a (B6), 3-and-a (B), 4-and-a (B6)',
        beats: [
          { count: '1', type: 'staccato-down', accent: true, triplet: true },
          { count: '+', type: 'staccato-down', triplet: true },
          { count: 'a', type: 'staccato-down', triplet: true },
          { count: '2', type: 'staccato-down', accent: true, triplet: true },
          { count: '+', type: 'staccato-down', triplet: true },
          { count: 'a', type: 'staccato-down', triplet: true },
          { count: '3', type: 'staccato-down', accent: true, triplet: true },
          { count: '+', type: 'staccato-down', triplet: true },
          { count: 'a', type: 'staccato-down', triplet: true },
          { count: '4', type: 'staccato-down', accent: true, triplet: true },
          { count: '+', type: 'staccato-down', triplet: true },
          { count: 'a', type: 'staccato-down', triplet: true }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_100',
        title: 'Exercise 100 - Rock Blues in B (Triplet Feel)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၀ - B သံစဉ် Rock Blues (Triplet Shuffle)',
        exerciseNumber: 100,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'B (Root 6 - 7th)', bars: 4 },
          { chordName: 'E (Root 5 - 7th)', bars: 2 },
          { chordName: 'B (Root 6 - 7th)', bars: 2 },
          { chordName: 'F# (Root 5 - 9th)', bars: 1 },
          { chordName: 'E (Root 5 - 7th)', bars: 1 },
          { chordName: 'B (Root 6 - 7th)', bars: 1 },
          { chordName: 'F# (Root 5 - 9th)', bars: 1 }
        ],
        notesMy: 'Status Quo, ZZ Top, Stevie Ray Vaughan စတိုင် Rock Shuffle ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Rock Shuffle Swing Feel',
        nameMy: 'Rock Shuffle Swing စီးမျောမှု',
        explanationMy: 'Triplet Rhythm တီးရာတွင် စက်ရုပ်သဖွယ် တင်းတင်းကျပ်ကျပ် မတီးဘဲ အလယ်အချက် (+) ကို အနည်းငယ် ပေါ့ပါးစွာ ခတ်၍ Swing Feel ထွက်ပေါ်စေရမည်။',
        proTipMy: 'ခြေထောက်ဖြင့် Beat 1, 2, 3, 4 ကို လေးနက်စွာ လိုက်ပေးပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'လက်ယာလက် အရမ်းညောင်းပြီး စည်းချက်မမှန်ခြင်း',
        fixMy: 'လက်မောင်းတစ်ခုလုံး မလှုပ်ပါနှင့်။ လက်ကောက်ဝတ် (Wrist) ကိုသာ သုံး၍ ပျော့ပျောင်းစွာ ခတ်ပါ။'
      }
    ]
  },
  {
    id: 44,
    section: 2,
    title: 'Simple vs Compound Time (6/8 Time) & Section 2 Summary',
    titleMy: 'အခန်း ၄၄ - Simple vs Compound Time (6/8 စည်းဝါး) နှင့် အပိုင်း ၂ အနှစ်ချုပ်',
    subtitle: '4/4, 3/4 (Simple) နှင့် 6/8, 12/8 (Compound) စည်းဝါး ခြားနားချက်',
    overviewMy: 'Beat တစ်ခုကို ၂ ပိုင်းခွဲသော Simple Time (4/4, 3/4) နှင့် Beat တစ်ခုကို ၃ ပိုင်းခွဲသော Compound Time (6/8, 12/8) စည်းဝါး သဘောတရားနှင့် အပိုင်း ၂ အနှစ်ချုပ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Simple Time (2/4, 3/4, 4/4): Beat တိုင်းသည် Undotted Note (Quarter note) ဖြစ်ပြီး ၂ ပိုင်းစီ ခွဲနိုင်သည်။ (1+, 2+, 3+)။',
      'Compound Time (6/8, 12/8): Beat တိုင်းသည် Dotted Quarter Note ဖြစ်ပြီး ၃ ပိုင်းစီ ခွဲနိုင်သည်။',
      '6/8 Time သည် ၆ ချက်စည်း မဟုတ်ဘဲ တစ် Bar လျှင် Dotted Beats ၂ ချက်သာ ရှိပြီး Beat 1 နှင့် 4 တွင် အဓိက အလေးပေး (1 2 3, 4 5 6) ခတ်ရသည်။',
      'Exercise 102 တွင် 6/8 Turnaround: C -> Am -> F -> G။',
      'Ending Sequence: I - IV - I - V7 - I (သီချင်းအဆုံးသတ် စံပြပုံစံ)။'
    ],
    chords: ['C', 'Am', 'F_barre', 'G', 'G7'],
    rhythms: [
      {
        id: 'r_six_eight_time',
        name: '6/8 Compound Time Rhythm (Exercise 102)',
        timeSignature: '6/8',
        descriptionEn: 'V (1), V^ (2+), V (3) | V (4), V^ (5+), V (6)',
        descriptionMy: 'Beat 1 နှင့် 4 တွင် အလေးပေးခတ်သော 6/8 စည်းချက်',
        spokenCount: 'ONE-2-3, FOUR-5-6',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down', accent: true },
          { count: '5', type: 'down' },
          { count: '+', type: 'up' },
          { count: '6', type: 'down' }
        ],
        defaultBpm: 60
      }
    ],
    exercises: [
      {
        id: 'ex_102',
        title: 'Exercise 102 - Turnaround in 6/8 Compound Time',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀၂ - 6/8 စည်းဝါး Turnaround (C - Am - F - G)',
        exerciseNumber: 102,
        timeSignature: '6/8',
        recommendedBpm: 60,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Am', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'G', bars: 1 },
          { chordName: 'C (Ending)', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'G7', bars: 1 },
          { chordName: 'C', bars: 1 }
        ],
        notesMy: 'The Beatles, Simon & Garfunkel တို့၏ 6/8 Ballad သီချင်းများတွင် အမြဲသုံးသော စည်းဝါးဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: '6/8 vs 3/4 Distinction',
        nameMy: '6/8 နှင့် 3/4 ကွဲပြားမှု',
        explanationMy: '3/4 တွင် တစ် Bar လျှင် ၃ ချက် (1, 2, 3) ဖြစ်ပြီး၊ 6/8 တွင်မူ ၂ ချက် (Dotted beats ၂ ခု: ONE-two-three, FOUR-five-six) လှိုင်းထနေသော စီးမျောမှု ခံစားရစေသည်။',
        proTipMy: 'ဂီတပညာရှင်တိုင်း မဖြစ်မနေ သိထားရမည့် စည်းဝါးခွဲခြားမှု ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: '6/8 ကို 3/4 သဖွယ် တီးမိခြင်း',
        fixMy: 'ရေတွက်ရာတွင် "ONE-two-three, FOUR-five-six" ဟု အသံကျယ်ကျယ်နှင့် အလေးပေး ဆိုကြည့်ပါ။'
      }
    ]
  }
];
