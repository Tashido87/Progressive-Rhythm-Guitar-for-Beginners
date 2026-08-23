import { LessonData } from '../types';

export const SECTION_1_LESSONS: LessonData[] = [
  {
    id: 1,
    section: 1,
    title: 'Chord Diagrams, A and D Chords',
    titleMy: 'အခန်း ၁ - Chord Diagrams နှင့် A, D Chords အခြေခံ',
    subtitle: 'ဂစ်တာ Chord ဖတ်နည်းနှင့် ပထမဆုံး A, D Chords',
    overviewMy: 'ဂစ်တာ Chord Diagram များကို စနစ်တကျဖတ်တတ်စေရန်နှင့် လက်ချောင်း (Fingertips) များ မှန်ကန်စွာ နေရာချထားတတ်စေရန် လေ့ကျင့်ပေးမည်။',
    keyPointsMy: [
      'Chord ဆိုသည်မှာ တစ်ပြိုင်တည်း တီးခတ်သောအသံ ၃ သံ သို့မဟုတ် ထို့ထက်ပိုသော အသံစုဖြစ်သည်။',
      'ဒေါင်လိုက်မျဉ်းများသည် ကြိုး (Strings 6 to 1) ဖြစ်ပြီး၊ အလျားလိုက်မျဉ်းများသည် Frets များဖြစ်သည်။',
      'လက်ထိပ် (Fingertips) ဖြင့် Fret ၏ ကပ်လျက်နောက်နားတွင် ဒေါင်လိုက်ကျကျ ဖိရပါမည်။',
      'D Chord တီးခတ်ရာတွင် 6th & 5th strings များကို မတီးရပါ။ ကြိုး ၄ မှ စတင်ခတ်ပါ။'
    ],
    chords: ['A', 'D'],
    rhythms: [
      {
        id: 'r_down_4',
        name: '4 Down Strums (4/4)',
        timeSignature: '4/4',
        descriptionEn: '4 even down strums per bar (Quarter notes)',
        descriptionMy: 'တစ် Bar လျှင် အောက်သို့ ၄ ချက် ညီညာစွာ ခတ်ပါ (V V V V)',
        spokenCount: '1 - 2 - 3 - 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_1',
        title: 'Exercise 1 - A & D Chord Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁ - A နှင့် D Chord ကူးပြောင်းခြင်း',
        exerciseNumber: 1,
        timeSignature: '4/4',
        recommendedBpm: 70,
        chords: [
          { chordName: 'A', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'D', bars: 1 }
        ],
        notesMy: 'A မှ D သို့ ကူးရာတွင် လက်ညှိုး (Finger 1) ကို 3rd string 2nd fret ပေါ်တွင် Pivot အဖြစ် မကြွဘဲ ထားပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Pivot Finger (A to D)',
        nameMy: 'မှီငြမ်းလက်ချောင်း (Pivot Finger နည်းစနစ်)',
        explanationMy: 'A Chord မှ D Chord သို့ ပြောင်းရာတွင် Finger 1 (လက်ညှိုး) သည် 3rd string Fret 2 ပေါ်တွင် အမြဲရှိနေသဖြင့် မကြွဘဲ အခြားလက်ချောင်းများကိုသာ ရွှေ့ပါ။',
        proTipMy: 'Pivot လက်ချောင်းကို အခြေပြုခြင်းဖြင့် Chord ပြောင်းချိန် ပိုမိုမြန်ဆန် ချောမွေ့စေသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'အသံမမြည်ဘဲ တိုးတိတ် သို့မဟုတ် တုန်ခါနေခြင်း (Buzzing)',
        fixMy: 'လက်ချောင်းထိပ်များဖြင့် ဖိထားခြင်း ဟုတ်မဟုတ် စစ်ဆေးပါ။ Fret သံချောင်းပေါ် မရောက်စေဘဲ Fret သံချောင်း၏ ကပ်လျက်နောက်တွင် ဖိပါ။'
      }
    ]
  },
  {
    id: 2,
    section: 1,
    title: 'Musical Terms, Down Strums & Bar Lines',
    titleMy: 'အခန်း ၂ - ဂီတဝေါဟာရများ၊ Down Strum နှင့် Bar Lines',
    subtitle: 'Staff, Treble Clef, Time Signature နှင့် စည်းဝါးရေတွက်နည်း',
    overviewMy: 'ဂီတစာရွက် (Staff) ဖတ်နည်း၊ Time Signature (4/4) နှင့် Down Strum (V) စနစ်တကျ ရေတွက်ပုံကို သင်ယူမည်။',
    keyPointsMy: [
      'Staff တွင် မျဉ်းပြိုင် ၅ ကြောင်းနှင့် ကြား ၄ ကြား ပါဝင်သည်။',
      'Time Signature (4/4) တွင် အပေါ်နံပါတ် ၄ သည် တစ် Bar လျှင် ၄ ချက်ဖြစ်ပြီး၊ အောက် ၄ သည် Quarter note (Crotchet) ကို ကိုယ်စားပြုသည်။',
      'V သင်္ကေတသည် Down Strum (အောက်သို့ ခတ်ခြင်း) ဖြစ်သည်။',
      'စည်းဝါးမှန်စေရန် ခြေထောက်ဖြင့် 1, 2, 3, 4 ညီညာစွာ စည်းလိုက်ပါ။'
    ],
    chords: ['A', 'D'],
    rhythms: [
      {
        id: 'r_down_4_steady',
        name: 'Basic 4/4 Down Strum',
        timeSignature: '4/4',
        descriptionEn: 'Four down strums with foot tap',
        descriptionMy: 'ခြေထောက်စည်းနှင့်အတူ အောက်သို့ ၄ ချက် ခတ်ခြင်း',
        spokenCount: '1 - 2 - 3 - 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_2_terms',
        title: 'Exercise 1 Review - Steady Counting',
        titleMy: 'လေ့ကျင့်ခန်း - စည်းဝါးညီညွတ်သော A - D လေ့ကျင့်ခန်း',
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'A', bars: 2 },
          { chordName: 'D', bars: 2 },
          { chordName: 'A', bars: 2 },
          { chordName: 'D', bars: 2 }
        ],
        notesMy: 'မြန်မြန်တီးခြင်းထက် စည်းဝါးမပြတ် တသမတ်တည်း ကူးပြောင်းနိုင်ခြင်းက ပိုအရေးကြီးသည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Metronome Foot Tapping',
        nameMy: 'ခြေထောက်ဖြင့် စည်းချက်လိုက်ခြင်း',
        explanationMy: 'Strum ခတ်တိုင်း ခြေထောက်ကို ကြမ်းပြင်နှင့် ညီညီညာညာ ချပါ။',
        proTipMy: 'အတွင်းစိတ်ထဲမှ အသံကျယ်ကျယ် 1... 2... 3... 4 ရေတွက်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Chord ပြောင်းချိန်တွင် စည်းဝါး ရပ်တန့်သွားခြင်း',
        fixMy: 'Tempo ကို ၅၀-၆၀ BPM ခန့် နှေးနှေးဖြင့် စတင်ပါ။ လက်ချောင်းများကို ကြိုတင်ရွှေ့ရန် ပြင်ဆင်ပါ။'
      }
    ]
  },
  {
    id: 3,
    section: 1,
    title: 'E Chord, 12 Bar Blues & Down/Up Strums',
    titleMy: 'အခန်း ၃ - E Chord၊ 12 Bar Blues နှင့် Down/Up Strum (V ^)',
    subtitle: 'A, D, E Chords များဖြင့် 12 Bar Blues နှင့် Up Strum စတင်ခြင်း',
    overviewMy: 'Rock ဂစ်တာတွင် အခြေခံအကျဆုံးဖြစ်သော 12 Bar Blues သဘောတရားနှင့် Up Strum (^) ထည့်သွင်း၍ ရစ်သမ် ပိုမိုသက်ဝင်စေရန် လေ့ကျင့်မည်။',
    keyPointsMy: [
      'E Chord တွင် ကြိုး ၆ ချောင်းစလုံး အသံမြည်သည်။',
      'Slide Finger: A မှ E သို့ ကူးရာတွင် Finger 1 ကို ကြိုးမကြွဘဲ Fret 2 မှ Fret 1 သို့ လျှော (Slide) ရွှေ့နိုင်သည်။',
      '12 Bar Blues သည် Elvis, Chuck Berry, Beatles တို့ အသုံးပြုသော ၁၂ Bar ပုံသေ Pattern ဖြစ်သည်။',
      'Down Strum (V) ကို 1, 2, 3, 4 တွင် ခတ်ပြီး၊ Up Strum (^) ကို "+" (and) တွင် အပေါ်သို့ ခတ်သည်။'
    ],
    chords: ['A', 'D', 'E'],
    rhythms: [
      {
        id: 'r_eighth_full',
        name: 'All Down/Up Eighths (Exercise 4)',
        timeSignature: '4/4',
        descriptionEn: '1 + 2 + 3 + 4 + (8 strums per bar)',
        descriptionMy: 'တစ် Bar လျှင် ၈ ချက် (Down Up Down Up Down Up Down Up)',
        spokenCount: '1 + 2 + 3 + 4 +',
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
        defaultBpm: 80
      },
      {
        id: 'r_down_up_beat2',
        name: 'Down-Up on Beat 2 Only (Exercise 5 & 6)',
        timeSignature: '4/4',
        descriptionEn: 'V - V^ - V - V (1, 2+, 3, 4)',
        descriptionMy: 'Beat 2 တွင်သာ Up Strum ပါဝင်သော ရစ်သမ်',
        spokenCount: '1, 2-and, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_2',
        title: 'Exercise 2 - A, E, D, E Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၂ - A, E, D, E သုံး Chord ကူးပြောင်းခြင်း',
        exerciseNumber: 2,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'E', bars: 1 }
        ],
        notesMy: 'Music Repeat Sign ပါရှိပါက အစမှ ပြန်တီးပြီး နောက်ဆုံးတွင် A Chord ၁ ချက်ခတ်၍ အဆုံးသတ်ပါ။'
      },
      {
        id: 'ex_3_blues12',
        title: 'Exercise 3 - 12 Bar Blues in A',
        titleMy: 'လေ့ကျင့်ခန်း ၃ - A သံစဉ် ၁၂ Bar Blues',
        exerciseNumber: 3,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A', bars: 4 },
          { chordName: 'D', bars: 2 },
          { chordName: 'A', bars: 2 },
          { chordName: 'E', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 }
        ],
        notesMy: 'Rock ဂီတ၏ အခြေခံအုတ်မြစ်ဖြစ်သော 12 Bar Blues ပုံစံဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Slide Finger Technique',
        nameMy: 'လက်ချောင်း လျှောရွှေ့နည်းစနစ် (Slide)',
        explanationMy: 'A မှ E သို့ ပြောင်းရာတွင် Finger 1 ကို 3rd string ပေါ်မှ မကြွဘဲ Fret 2 မှ Fret 1 သို့ လျှော၍ ရွှေ့ပါ။',
        proTipMy: 'Slide သုံးခြင်းဖြင့် လက်ချောင်းများ မယိုင်ဘဲ တည်ငြိမ်စွာ အချိန်မီ ကူးပြောင်းနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Up Strum ခတ်ရာတွင် ပစ်ခ် (Pick) သည် ကြိုးများတွင် ငြိနေခြင်း',
        fixMy: 'Pick ကို အလွန်တင်းကျပ်စွာ မကိုင်ပါနှင့်။ လက်ကောက်ဝတ် (Wrist) ကို လျှော့၍ ပျော့ပျောင်းစွာ ခတ်ပါ။'
      }
    ]
  },
  {
    id: 4,
    section: 1,
    title: 'G and C Chords, First String Notes & TAB',
    titleMy: 'အခန်း ၄ - G, C Chords၊ 1st String Notes နှင့် Tablature (TAB)',
    subtitle: 'G နှင့် C Chords၊ ကြိုး ၁ ပေါ်ရှိ E, F, G Notes နှင့် Tab ဖတ်နည်း',
    overviewMy: 'အသုံးများဆုံး G နှင့် C Major Chords၊ 1st String မှ အခြေခံ Notes များနှင့် Tablature (TAB) ဖတ်ပုံကို စတင်လေ့လာမည်။',
    keyPointsMy: [
      'G Chord: ကြိုး ၆ (Fret 3, Finger 2), ကြိုး ၅ (Fret 2, Finger 1), ကြိုး ၁ (Fret 3, Finger 3)။',
      'C Chord: ကြိုး ၅ (Fret 3, Finger 3), ကြိုး ၄ (Fret 2, Finger 2), ကြိုး ၂ (Fret 1, Finger 1)။',
      'A မှ C သို့ ကူးရာတွင် Finger 2 (လက်ခလယ်) သည် 4th string 2nd fret ပေါ်တွင် Pivot အဖြစ် မကြွဘဲ ထားနိုင်သည်။',
      'TAB တွင် မျဉ်း ၆ ကြောင်းသည် ဂစ်တာကြိုး ၆ ချောင်းဖြစ်ပြီး၊ နံပါတ်သည် Fret နေရာကို ညွှန်ပြသည်။'
    ],
    chords: ['G', 'C'],
    rhythms: [
      {
        id: 'r_sync_1',
        name: 'V^ V^ V V (1+ 2+ 3 4)',
        timeSignature: '4/4',
        descriptionEn: 'Down-up on 1st & 2nd beats, solid downs on 3 & 4',
        descriptionMy: '1+ 2+ တွင် Down/Up ခတ်ပြီး 3 4 တွင် Down ဖြင့် အလေးပေးခတ်ပါ',
        spokenCount: '1-and, 2-and, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_7',
        title: 'Exercise 7 - G, A, C, D Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၇ - G, A, C, D သံစဉ်တွဲ',
        exerciseNumber: 7,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 }
        ],
        notesMy: 'A မှ C သို့ ကူးရာတွင် Finger 2 Pivot ကို အသုံးပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Tablature (TAB) Reading',
        nameMy: 'TAB စနစ် ဖတ်ရှုနည်း',
        explanationMy: 'အပေါ်ဆုံးမျဉ်းသည် 1st string (High E) ဖြစ်ပြီး၊ အောက်ဆုံးမျဉ်းသည် 6th string (Low E) ဖြစ်သည်။ နံပါတ် 0 သည် Open string ဖြစ်ပြီး 1, 2, 3 သည် သက်ဆိုင်ရာ Fret ကို ဖိရမည်။',
        proTipMy: 'Sheet Music နှင့် TAB ကို တွဲဖက်ကြည့်ရှုခြင်းဖြင့် အချိန်တန်ဖိုးနှင့် လက်ကွက်ကို ချက်ချင်း သိရှိနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'C Chord တီးရာတွင် 1st string မှ အသံအက်ကွဲ သို့မဟုတ် သေနေခြင်း',
        fixMy: 'Finger 1 သို့မဟုတ် Finger 3 သည် ကြိုးအောက်သို့ လျှောကျမနေစေရန် လက်ချောင်းများကို မတ်မတ်ခုံးထားပါ။'
      }
    ]
  },
  {
    id: 5,
    section: 1,
    title: 'Em Chord, Turnaround No. 1 & 2nd String Notes',
    titleMy: 'အခန်း ၅ - Em Chord၊ Turnaround No. 1 နှင့် 2nd String Notes',
    subtitle: 'G - Em - C - D (Turnaround No. 1) နှင့် Minor Chord သဘောတရား',
    overviewMy: 'သီချင်းရာပေါင်းများစွာ၏ အခြေခံဖြစ်သော Turnaround Progression No. 1 (G - Em - C - D) နှင့် E Minor Chord ကို လေ့လာမည်။',
    keyPointsMy: [
      'Em (E Minor) တွင် ‘m’ သည် Minor ကို ရည်ညွှန်းပြီး အသံအရောင် လွမ်းဆွတ်ဖွယ် ဖြစ်စေသည်။',
      'Turnaround Progression No. 1: G - Em - C - D သည် 50s/60s Pop နှင့် Rock သီချင်းများစွာ၏ မူလသံစဉ်ဖြစ်သည်။',
      '2nd String Notes: Open = B, Fret 1 = C (Finger 1), Fret 3 = D (Finger 3)။'
    ],
    chords: ['Em'],
    rhythms: [
      {
        id: 'r_turnaround_basic',
        name: 'V V^ V V (1 2+ 3 4)',
        timeSignature: '4/4',
        descriptionEn: 'Turnaround rhythm',
        descriptionMy: 'Turnaround အတွက် စံပြရစ်သမ်',
        spokenCount: '1, 2-and, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_8',
        title: 'Exercise 8 - Turnaround No. 1 (G - Em - C - D)',
        titleMy: 'လေ့ကျင့်ခန်း ၈ - Turnaround No. 1 (G - Em - C - D)',
        exerciseNumber: 8,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 }
        ],
        notesMy: 'ဒီ Progression သည် Stand By Me, Blue Moon, Last Kiss စသော သီချင်းကြီးများ၏ သံစဉ်ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Turnaround Movement',
        nameMy: 'Turnaround စက်ဝန်း လှုပ်ရှားမှု',
        explanationMy: 'Turnaround ဆိုသည်မှာ I - vi - IV - V သံစဉ်တွဲဖြစ်ပြီး အဆုံးမရှိ ချောမွေ့စွာ ပြန်လည်လည်ပတ်နိုင်သော သဘောရှိသည်။',
        proTipMy: 'G မှ Em သို့ ကူးစဉ် Finger 1 ကို 5th string 2nd fret ပေါ်တွင် Pivot အဖြစ် ဆက်လက်ဖိထားပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Em မှ C သို့ ပြောင်းရာတွင် လက်ချောင်းများ ရှုပ်ထွေးခြင်း',
        fixMy: 'Finger 2 (လက်ခလယ်) သည် 4th string 2nd fret ပေါ်တွင် ရှိနေပြီးဖြစ်၍ ၎င်းကို မကြွဘဲ ကျန်လက်ချောင်း ၂ ချောင်းကိုသာ နေရာချပါ။'
      }
    ]
  },
  {
    id: 6,
    section: 1,
    title: 'F Chord, Turnaround No. 2 & 3rd String Notes',
    titleMy: 'အခန်း ၆ - F Chord၊ Turnaround No. 2 (C - Em - F - G)',
    subtitle: 'Mini-Barre F Chord၊ C Key Turnaround နှင့် Octave သဘောတရား',
    overviewMy: 'ဂစ်တာသမားတိုင်း ကြုံတွေ့ရသော F Chord (Mini-barre) ကို ကျွမ်းကျင်အောင် ဖမ်းနည်းနှင့် Key of C Turnaround (C - Em - F - G) ကို သင်ယူမည်။',
    keyPointsMy: [
      'F Chord: Finger 1 ဖြင့် ကြိုး ၁ နှင့် ၂ ကို Fret 1 တွင် တပြိုင်နက် ဖိရသည် (Mini-Barre)။',
      'လက်ချောင်းကို အနည်းငယ် ဘယ်ဘက်သို့ စောင်းပေးပါက အရိုးမာသောဘက်ဖြင့် ပိုမိုခိုင်မာစွာ ဖိနိုင်သည်။',
      'Turnaround No. 2: C - Em - F - G (I - iii - IV - V) ဖြစ်သည်။',
      '3rd String Notes: Open = G, Fret 2 = A။ 1st string Fret 3 ရှိ G နှင့် 3rd string Open G သည် 1 Octave ကွာဝေးသည်။'
    ],
    chords: ['F'],
    rhythms: [
      {
        id: 'r_turnaround2',
        name: 'V V^ V^ V (1 2+ 3+ 4)',
        timeSignature: '4/4',
        descriptionEn: 'Rich pop strum for Turnaround 2',
        descriptionMy: 'Pop သီချင်းများတွင် အလွန်သုံးသော ရစ်သမ်',
        spokenCount: '1, 2-and, 3-and, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_9',
        title: 'Exercise 9 - Turnaround No. 2 in C (C - Em - F - G)',
        titleMy: 'လေ့ကျင့်ခန်း ၉ - Turnaround No. 2 (C - Em - F - G)',
        exerciseNumber: 9,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'G', bars: 1 }
        ],
        notesMy: 'F Chord ၏ ကြိုး ၁ နှင့် ၂ အသံ ကြည်လင်အောင် အထူးဂရုစိုက်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Mini-Barre Tilt',
        nameMy: 'Mini-Barre လက်ညှိုး စောင်းဖိနည်း',
        explanationMy: 'လက်ညှိုး၏ အလယ်သားနုနုဖြင့် တည့်တည့်မဖိဘဲ အနည်းငယ် ဘယ်ဘက်သို့ စောင်း၍ အရိုးမာသောအခြမ်းဖြင့် ကြိုး ၂ ချောင်းကို ဖိပါ။',
        proTipMy: 'လက်မကို လည်ပင်းနောက်ကျော အလယ်ဗဟိုတွင် ထောက်ထားပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'F Chord တီးခတ်ရာတွင် 1st string သို့မဟုတ် 2nd string အသံပျောက်နေခြင်း',
        fixMy: 'လက်ညှိုး၏ အဆစ်ခေါက်ထားသော နေရာသည် ကြိုးပေါ်တွင် ကျရောက်မနေစေဘဲ အနည်းငယ် အပေါ် သို့မဟုတ် အောက်သို့ ချိန်ညှိပါ။'
      }
    ]
  },
  {
    id: 7,
    section: 1,
    title: 'A7, D7, E7 Chords & Dominant 7th Substitution',
    titleMy: 'အခန်း ၇ - Dominant 7th Chords (A7, D7, E7) နှင့် Chord Substitution',
    subtitle: '7th Chords များဖြင့် 12 Bar Blues ကို ပိုမိုအရောင်ဆန်းစေခြင်း',
    overviewMy: 'Major Chord များအစား Dominant 7th (A7, D7, E7) ကို အစားထိုး (Substitute) သုံးစွဲခြင်းဖြင့် Blues နှင့် Rock အရသာ ပေါ်လွင်စေပုံကို သင်ယူမည်။',
    keyPointsMy: [
      'Chords အမျိုးအစား ၃ မျိုးရှိသည်: Major (ပျော်ရွှင်တက်ကြွ), Minor (လွမ်းဆွေးနူးညံ့), 7th (တင်းအားရှိပြီး Blues ဆန်သောသံ)။',
      'Dominant 7th Chords: A7, D7, E7 သည် Major chord များထက် ပိုမို Blues အရသာ ကြွယ်ဝသည်။',
      'Turnaround ၏ နောက်ဆုံး Bar တွင် Major အစား 7th (ဥပမာ G key တွင် D အစား D7) သုံးပါက မူလ G သို့ ပိုမိုခိုင်မာစွာ ဦးတည် (Resolve) စေသည်။',
      '4th String Notes: Open = D, Fret 2 = E (Finger 2), Fret 3 = F (Finger 3)။'
    ],
    chords: ['A7', 'D7', 'E7'],
    rhythms: [
      {
        id: 'r_blues_split',
        name: 'V^ V V V (1+ 2 3 4)',
        timeSignature: '4/4',
        descriptionEn: 'Blues 7th quick up-down strum',
        descriptionMy: '1+ တွင် Down/Up ခတ်ပြီး 2, 3, 4 တွင် Down ဖြင့် ခတ်ပါ',
        spokenCount: '1-and, 2, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_10',
        title: 'Exercise 10 - 12 Bar Blues with 7th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၁၀ - 7th Chords ပါဝင်သော ၁၂ Bar Blues',
        exerciseNumber: 10,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'D7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'E', bars: 1, subChords: [{ chordName: 'E', beats: 2 }, { chordName: 'E7', beats: 2 }] },
          { chordName: 'D', bars: 1, subChords: [{ chordName: 'D', beats: 2 }, { chordName: 'D7', beats: 2 }] },
          { chordName: 'A', bars: 1, subChords: [{ chordName: 'A', beats: 2 }, { chordName: 'A7', beats: 2 }] },
          { chordName: 'E', bars: 1, subChords: [{ chordName: 'E', beats: 2 }, { chordName: 'E7', beats: 2 }] }
        ],
        notesMy: 'Bar 9 မှ 12 တွင် တစ် Bar လျှင် Chord ၂ မျိုး (၂ ချက်စီ) ပြောင်းရပါမည်။'
      },
      {
        id: 'ex_11',
        title: 'Exercise 11 - Turnaround with D7 Resolution',
        titleMy: 'လေ့ကျင့်ခန်း ၁၁ - D7 ဖြင့် Resolve လုပ်သော Turnaround',
        exerciseNumber: 11,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D7', bars: 1 }
        ],
        notesMy: 'D7 သည် G သို့ ပြန်လည်ရောက်ရှိစေရန် ဆွဲဆောင်အား (Tension & Resolution) ဖန်တီးပေးသည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Chord Substitution Principle',
        nameMy: 'Chord အစားထိုးခြင်း သဘောတရား',
        explanationMy: 'သီချင်းတစ်ပုဒ်၏ သံစဉ် အရိုးရှင်းလွန်းနေပါက မူလ Major chord နေရာတွင် Dominant 7th chord ကို အစားထိုးခြင်းဖြင့် ပိုမိုခေတ်မီပြီး ဆွဲဆောင်မှုရှိစေသည်။',
        proTipMy: 'သီချင်း၏ အဓိက V chord (ဥပမာ A key တွင် E7, G key တွင် D7) နေရာတွင် 7th ကို အမြဲသုံးနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Bar 9-12 တွင် တစ် Bar လျှင် ၂ ခါ ပြောင်းရသဖြင့် အချိန်မမီခြင်း',
        fixMy: 'လက်ချောင်းများကို မလိုအပ်ဘဲ အဝေးသို့ မကြွပါနှင့်။ ကြိုးများနှင့် နီးကပ်စွာ ထားရှိပါ။'
      }
    ]
  },
  {
    id: 8,
    section: 1,
    title: 'Continuous Right Hand Movement & "The Golden Rhythm"',
    titleMy: 'အခန်း ၈ - လက်ယာဘက် အဆက်မပြတ်လှုပ်ရှားမှုနှင့် ရွှေရောင် ရစ်သမ်',
    subtitle: 'Down Up Down Up ... Up Down Up (Ghost Strum သဘောတရား)',
    overviewMy: 'ဂစ်တာရစ်သမ်တွင် အရေးအကြီးဆုံးဖြစ်သော Continuous Right Hand Movement နှင့် အကျော်ကြားဆုံး "Down Up Down Up ... Up Down Up" Pattern ကို တတ်မြောက်အောင် သင်ယူမည်။',
    keyPointsMy: [
      'Continuous Movement: လက်ယာဘက်သည် စက်ပန်ကာသဖွယ် အပေါ်အောက် အမြဲတမ်း ညီညာစွာ လှုပ်ရှားနေရမည်။',
      'မခတ်သော အချက် (Air Strum / Ghost Strum) တွင် လက်သည် ကြိုးကို မထိဘဲ လေထဲတွင် ဖြတ်သွားသည်။',
      'ရွှေရောင် ရစ်သမ် ပုံသေကားချပ်: | V^ V^ .^ V^ | (Down Up Down Up ... Up Down Up)။',
      '5th String Notes: Open = A, Fret 2 = B (Finger 2), Fret 3 = C (Finger 3)။'
    ],
    chords: ['G', 'Em', 'C', 'D7'],
    rhythms: [
      {
        id: 'r_golden_pop',
        name: 'The Golden Rhythm: Down Up Down Up ... Up Down Up',
        timeSignature: '4/4',
        descriptionEn: '| V ^ V ^ . ^ V ^ | (Air down on beat 3)',
        descriptionMy: 'Beat 3 တွင် အောက်သို့ လေထဲခတ်ပြီး အပေါ်ပြန်အဆွဲတွင် အသံမြည်စေသည်',
        spokenCount: 'Down Up Down Up ... Up Down Up',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'air-down' }, // Ghost strum
          { count: '+', type: 'up', accent: true },
          { count: '4', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_12',
        title: 'Exercise 12 - Master Golden Rhythm on Turnaround',
        titleMy: 'လေ့ကျင့်ခန်း ၁၂ - Turnaround တွင် ရွှေရောင်ရစ်သမ် လေ့ကျင့်ခြင်း',
        exerciseNumber: 12,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D7', bars: 1 }
        ],
        notesMy: 'ဒီရစ်သမ်ကို မကျွမ်းကျင်မချင်း နောက်အခန်းသို့ မကူးပါနှင့်။ အလွန်အရေးကြီးသော ရစ်သမ်ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Ghost / Air Strumming',
        nameMy: 'လေထဲခတ်ခြင်း (Ghost Strum နည်းစနစ်)',
        explanationMy: 'လက်ယာဘက် လက်ကောက်ဝတ်၏ စည်းချက်မပျက်စေရန် Beat 3 တွင် ကြိုးကို မထိဘဲ အောက်သို့ ဖြတ်သန်းကာ အတက်တွင်မှ ကြိုးကို ခတ်ခြင်း ဖြစ်သည်။',
        proTipMy: 'ပါးစပ်မှ "Down Up Down Up ... Up Down Up" ဟု အသံထွက် ဆိုပြီး လေ့ကျင့်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Beat 3 တွင် လက်ယာလက် ရပ်တန့်သွားခြင်း',
        fixMy: 'လက်ကို လုံးဝ မရပ်ပါနှင့်။ အောက်သို့ သဘာဝအတိုင်း ဆင်းသွားပြီး အပေါ်ပြန်တက်ချိန်တွင်မှ ကြိုးကို ခတ်ပါ။'
      }
    ]
  },
  {
    id: 9,
    section: 1,
    title: 'Alternative Fingerings, G7, C7 & Two Bar Rhythms',
    titleMy: 'အခန်း ၉ - လက်ကွက် အထူးဖမ်းနည်းများ၊ G7, C7 နှင့် Two-Bar Rhythms',
    subtitle: 'Em Alternative Pivot၊ G7, C7 Chords နှင့် Bar ၂ ခု ရစ်သမ်တွဲ',
    overviewMy: 'Chord ကူးပြောင်းမှု ပိုမိုမြန်ဆန်စေရန် လက်ချောင်း အခြားပုံစံ ပြောင်းဖမ်းနည်းနှင့် ၂ Bar ဆက်တိုက် ရစ်သမ်ပုံစံများကို လေ့လာမည်။',
    keyPointsMy: [
      'Em ကို Finger 1 & 2 ဖြင့် ဖမ်းပါက G -> Em (Finger 1 Pivot), Em -> C (Finger 2 Pivot) ဖြင့် အလွန်လွယ်ကူသွားသည်။',
      'G7: Fret 1 ကြိုး ၁ ကို Finger 1 ဖြင့် ဖိသည်။ C7: C chord ပေါ်သို့ Finger 4 ကို ကြိုး ၃ Fret 3 တွင် ထပ်ဖိသည်။',
      'Two-Bar Rhythms: သီချင်းတစ်ပုဒ်တွင် Bar တိုင်း တူညီသော Pattern မဟုတ်ဘဲ ၂ Bar လျှင် တစ်ခါ ပြောင်းလဲသော ရစ်သမ်များ ရှိသည်။'
    ],
    chords: ['G7', 'C7'],
    rhythms: [
      {
        id: 'r_two_bar_16',
        name: 'Two-Bar Pop Rhythm (Exercise 16A)',
        timeSignature: '4/4',
        descriptionEn: 'Bar 1: V V V^ V | Bar 2: V V^ .^ V',
        descriptionMy: 'Bar ၁: V V V^ V | Bar ၂: V V^ .^ V ပေါင်းစပ်ထားသော ၂ Bar ရစ်သမ်',
        spokenCount: 'Bar 1 (1 2 3+ 4) | Bar 2 (1 2+ . 4)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_14',
        title: 'Exercise 14 - C, A7, D7, G7 Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၄ - C, A7, D7, G7 Progression',
        exerciseNumber: 14,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'D7', bars: 1 },
          { chordName: 'G7', bars: 1 }
        ],
        notesMy: 'Jazz/Ragtime ဆန်သော Circle of Fifths သံစဉ်တွဲ ဖြစ်သည်။'
      },
      {
        id: 'ex_15',
        title: 'Exercise 15 - 8-Bar C7 & G7 Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၁၅ - C, E7, C7, F, C, G7, C, G7 သံစဉ်တွဲ',
        exerciseNumber: 15,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'E7', bars: 1 },
          { chordName: 'C7', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'G7', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'G7', bars: 1 }
        ],
        notesMy: 'C မှ C7 သို့ ကူးပြောင်းပြီး F သို့ ဦးတည်ပုံကို သတိပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Alternative Chord Fingering Choice',
        nameMy: 'ရှေ့နောက် Chord ပေါ်မူတည်၍ လက်ချောင်း ရွေးချယ်ဖမ်းနည်း',
        explanationMy: 'ရှေ့နှင့် နောက်လာမည့် Chord ပေါ် မူတည်၍ Pivot လက်ချောင်း ရရှိစေမည့် အဆင်ပြေဆုံး လက်ချောင်းကို ရွေးချယ်ဖမ်းရမည်။',
        proTipMy: 'ပုံသေလက်ကွက်တစ်ခုတည်းကိုသာ မသုံးဘဲ လျင်မြန်သော လက်ချောင်းအတွဲကို လေ့ကျင့်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'G7 တီးရာတွင် 1st string မှ အသံမသန့်ခြင်း',
        fixMy: 'Finger 1 ကို 1st fret ပေါ်တွင် သေချာဖိထားပြီး လက်ဝါးနှင့် ကြိုး ၁ မထိမိစေရန် ဂရုပြုပါ။'
      }
    ]
  },
  {
    id: 10,
    section: 1,
    title: 'Blues in E, B7 Chord, 1st/2nd Endings & 6th String Notes',
    titleMy: 'အခန်း ၁၀ - Blues in E၊ B7 Chord၊ 1st & 2nd Endings',
    subtitle: 'B7 Chord ဖမ်းနည်း၊ သီချင်းအဆုံးသတ်ပုံစံ (1st & 2nd Endings) နှင့် Dotted Notes',
    overviewMy: 'ဂန္ထဝင် Blues in E သံစဉ်၊ B7 Chord နှင့် ဂီတစာရွက်တွင် ပါဝင်သော 1st and 2nd Endings ဖတ်နည်းကို သင်ယူမည်။',
    keyPointsMy: [
      'B7 Chord: E blues အတွက် အဓိက chord ဖြစ်သည်။ E7 နှင့် B7 ကူးရာတွင် Finger 2 သည် Pivot ဖြစ်သည်။',
      '1st & 2nd Endings: ပထမတစ်ခေါက်တွင် Ending 1 အကွက်ကို တီးပြီး အစသို့ ပြန်သွားကာ ဒုတိယအကြိမ်တွင် Ending 1 ကို ကျော်၍ Ending 2 ကို တီးရသည်။',
      'Dotted Note: Note ၏ နောက်တွင် အစက်ပါပါက ၎င်း Note တန်ဖိုး၏ ထက်ဝက်ကို ထပ်ပေါင်းပေးရသည် (ဥပမာ Dotted Half Note = 2 + 1 = 3 Beats)။',
      '6th String Notes: Open = E, Fret 1 = F (Finger 1), Fret 3 = G (Finger 3)။'
    ],
    chords: ['B7'],
    rhythms: [
      {
        id: 'r_blues_in_e',
        name: 'Blues in E Strum Pattern',
        timeSignature: '4/4',
        descriptionEn: '| V^ V^ .^ V |',
        descriptionMy: '| V^ V^ .^ V | ပုံစံဖြင့် Blues ခတ်ကွက်',
        spokenCount: '1+ 2+ 3+ 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'air-down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_17',
        title: 'Exercise 17 - Blues in E with 1st and 2nd Endings',
        titleMy: 'လေ့ကျင့်ခန်း ၁၇ - E Key ၁၂ Bar Blues (Endings ပါဝင်သည်)',
        exerciseNumber: 17,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'E', bars: 1 },
          { chordName: 'E7', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'E7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'A7', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'E7', bars: 1 },
          { chordName: 'B7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'B7', bars: 1 }
        ],
        notesMy: '1st Ending တွင် B7 ဖြင့် အဆုံးသတ်ပြီး အစမှပြန်တီးကာ 2nd Ending တွင် E Chord ဖြင့် ပြီးဆုံးပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'E7 to B7 Pivot Finger',
        nameMy: 'E7 မှ B7 သို့ Pivot လက်ချောင်း',
        explanationMy: 'E7 မှ B7 သို့ ပြောင်းရာတွင် Finger 2 (လက်ခလယ်) သည် 5th string 2nd fret ပေါ်တွင် ရှိနေသဖြင့် မကြွဘဲ မူသေထားနိုင်သည်။',
        proTipMy: 'ဒီ Shortcut ကို အသုံးပြုခြင်းဖြင့် Blues တီးရာတွင် လျင်မြန်စွာ ကူးနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'B7 Chord ဖမ်းရာတွင် လက်ချောင်း ၄ ချောင်းစလုံး မဆံ့ဘဲ အသံပျောက်ခြင်း',
        fixMy: 'Finger 2 (5th string), Finger 1 (4th string), Finger 3 (3rd string), Finger 4 (1st string) ကို တစ်ဆင့်ချင်းစီ တည်ငြိမ်စွာ နေရာချပါ။'
      }
    ]
  },
  {
    id: 11,
    section: 1,
    title: 'Open Position Notes Summary, Tones & Semitones',
    titleMy: 'အခန်း ၁၁ - Open Position Notes အနှစ်ချုပ်၊ Tone နှင့် Semitone',
    subtitle: 'ဂစ်တာကြိုး ၆ ချောင်းစလုံး၏ Open Position Notes (E to G)',
    overviewMy: 'ဂစ်တာ ကြိုး ၆ ချောင်းစလုံး၏ ပထမ ၄ Frets အတွင်းရှိ Notes အားလုံး (Open Position) နှင့် Tone (၂ Fret) / Semitone (၁ Fret) ခြားနားချက်ကို နားလည်စေမည်။',
    keyPointsMy: [
      'B မှ C နှင့် E မှ F သည် 1 Fret သာ ကွာဝေးသည် (Semitone / တစ်ဝက်သံ)။',
      'ကျန် Notes များအားလုံး (A-B, C-D, D-E, F-G, G-A) သည် 2 Frets စီ ကွာဝေးသည် (Tone / တစ်သံပြည့်)။',
      'Note တန်ဖိုးများ: Whole Note (Semibreve) = 4 Counts, Half Note (Minim) = 2 Counts, Quarter Note (Crotchet) = 1 Count, Eighth Note (Quaver) = 1/2 Count။',
      'Bass Note Picking: Chord မခတ်မီ အခြေခံ Bass ကြိုး (ကြိုး ၆, ၅ သို့မဟုတ် ၄) ကို တစ်ချက် သီးသန့် ခတ်ခြင်း ဖြစ်သည်။'
    ],
    chords: ['C', 'Em', 'F', 'G', 'G7'],
    rhythms: [
      {
        id: 'r_bass_pick_1',
        name: 'Bass Note Picking (Exercise 18)',
        timeSignature: '4/4',
        descriptionEn: 'Bass on 1 & 4, Chords on 2 & 3',
        descriptionMy: 'Beat 1 နှင့် 4 တွင် Bass ကြိုးခတ်ပြီး Beat 2 နှင့် 3 တွင် Chord ခတ်ပါ',
        spokenCount: 'Bass, Chord, Chord, Bass',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 5 },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'bass-pick', bassString: 5 }
        ],
        defaultBpm: 80
      },
      {
        id: 'r_country_alternating',
        name: 'Country Alternating Bass (Exercise 19)',
        timeSignature: '4/4',
        descriptionEn: 'Alternating bass on 1 & 3, Strum on 2 & 4',
        descriptionMy: 'Country ပုံစံ Bass ကြိုး ၂ ချောင်း အလှည့်ကျ ခတ်ခြင်း (1: Bass, 2: Strum, 3: Bass 2, 4: Strum)',
        spokenCount: 'Bass 1, Strum, Bass 2, Strum',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 5 },
          { count: '2', type: 'down' },
          { count: '3', type: 'bass-pick', bassString: 4 },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_18',
        title: 'Exercise 18 - Bass Note Turnaround in C',
        titleMy: 'လေ့ကျင့်ခန်း ၁၈ - Bass Note ပါဝင်သော Turnaround in C',
        exerciseNumber: 18,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'G', bars: 1 }
        ],
        notesMy: 'Bass note တီးနေစဉ်တွင်လည်း လက်ဝဲဘက်မှ Chord တစ်ခုလုံးကို အပြည့် ဖိထားပေးရမည်။'
      },
      {
        id: 'ex_19',
        title: 'Exercise 19 - Country Pick-Strum (Alternating Bass)',
        titleMy: 'လေ့ကျင့်ခန်း ၁၉ - Country စတိုင် Alternating Bass လေ့ကျင့်ခန်း',
        exerciseNumber: 19,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'G7', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'G7', bars: 1 },
          { chordName: 'C', bars: 1 }
        ],
        notesMy: 'C တွင် ကြိုး ၅ နှင့် ၄၊ F တွင် ကြိုး ၄ နှင့် ၅၊ G7 တွင် ကြိုး ၆ နှင့် ၅ တို့ကို အလှည့်ကျ Bass ခတ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Alternating Bass Technique',
        nameMy: 'Alternating Bass (အလှည့်ကျ Bass ခတ်နည်း)',
        explanationMy: 'Country, Folk နှင့် Acoustic သီချင်းများတွင် Root Bass Note နှင့် 5th Bass Note ကို အလှည့်ကျ ခတ်ပေးခြင်းဖြင့် စည်းချက် ပိုမိုမြူးကြွလာစေသည်။',
        proTipMy: 'Bass ခတ်သည့် အချက်တွင် အသံကြည်လင်ပြီး လေးနက်စေရန် ပစ်ခ်ဖြင့် တိကျစွာ ခတ်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Bass ကြိုးခတ်ရာတွင် ဘေးနားရှိ အခြားကြိုးများကို မတော်တဆ ထိမိခြင်း',
        fixMy: 'လက်ယာလက်ကောက်ဝတ်ကို ဂစ်တာဘော်ဒီအပေါ်တွင် အသာထောက်ထားပြီး ပစ်ခ်လှုပ်ရှားမှုကို သေးငယ်တိကျစေပါ။'
      }
    ]
  },
  {
    id: 12,
    section: 1,
    title: 'Time Signatures: 3/4 Waltz Time & Bass Note Picking',
    titleMy: 'အခန်း ၁၂ - Time Signature (3/4 Waltz Time) နှင့် Bass Picking',
    subtitle: '3/4 စည်းဝါး (ဝေါ့ဇ်စတိုင်) နှင့် 3/4 တွင် Bass Note ခတ်နည်း',
    overviewMy: 'တစ် Bar လျှင် ၃ ချက်သာရှိသော 3/4 Time Signature (Waltz Time) သဘောတရားနှင့် Beat 1 တွင် အလေးပေးခတ်ပုံ (Accent) ကို သင်ယူမည်။',
    keyPointsMy: [
      '3/4 Time: တစ် Bar လျှင် ၃ ချက်ဖြစ်ပြီး ပထမဆုံး Beat 1 တွင် အမြဲ အလေးပေး (Accent / ကျယ်ကျယ်) ခတ်ရမည် (Boom - chick - chick)။',
      'Rock/Pop အများစုသည် 4/4 ဖြစ်ပြီး၊ Waltz, Ballad အချို့သည် 3/4 ဖြစ်သည်။',
      '3/4 တွင် အသုံးများသော ရစ်သမ်: | V V^ V | သို့မဟုတ် | V V^ V^ |။',
      '3/4 Bass Picking တွင် Beat 1 ၌ Bass ကြိုးခတ်ပြီး Beat 2, 3 တွင် Chord ခတ်သည်။'
    ],
    chords: ['C', 'Em', 'F', 'G', 'A', 'D', 'E'],
    rhythms: [
      {
        id: 'r_waltz_basic',
        name: 'Basic 3/4 Waltz Rhythm (V V V)',
        timeSignature: '3/4',
        descriptionEn: 'Accent beat 1, lighter on 2 & 3',
        descriptionMy: 'Beat 1 တွင် ကျယ်ကျယ်ခတ်ပြီး 2, 3 တွင် သာသာခတ်ပါ',
        spokenCount: '1 (ONE) - 2 - 3',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' }
        ],
        defaultBpm: 90
      },
      {
        id: 'r_waltz_variation_1',
        name: '3/4 Rhythm Variation: V V^ V',
        timeSignature: '3/4',
        descriptionEn: '| V V^ V | (1, 2+, 3)',
        descriptionMy: 'Beat 2 တွင် Down/Up ပါသော 3/4 ရစ်သမ်',
        spokenCount: '1, 2-and, 3',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' }
        ],
        defaultBpm: 95
      }
    ],
    exercises: [
      {
        id: 'ex_20',
        title: 'Exercise 20 - Turnaround in 3/4 Time',
        titleMy: 'လေ့ကျင့်ခန်း ၂၀ - 3/4 စည်းဝါးဖြင့် Turnaround in C',
        exerciseNumber: 20,
        timeSignature: '3/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'G', bars: 1 }
        ],
        notesMy: 'Bar တိုင်း၏ ပထမအချက် (Beat 1) ကို အလေးပေးခတ်ရန် မမေ့ပါနှင့်။'
      },
      {
        id: 'ex_21',
        title: 'Exercise 21 - Bass Note Picking in 3/4 Time',
        titleMy: 'လေ့ကျင့်ခန်း ၂၁ - 3/4 စည်းဝါး Bass Picking (A - D - E)',
        exerciseNumber: 21,
        timeSignature: '3/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'A', bars: 2 },
          { chordName: 'D', bars: 2 },
          { chordName: 'E', bars: 2 },
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 }
        ],
        notesMy: '၂ Bar ရစ်သမ်တွဲ ဖြစ်သည်။ Bar 1 တွင် Bass + Strums, Bar 2 တွင် Alternating Bass + Strums ပေါင်းစပ်ထားသည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Waltz Accentuation',
        nameMy: '3/4 Waltz စည်းဝါး အလေးပေးနည်း',
        explanationMy: '3/4 သီချင်းများတွင် Beat 1 အား အလေးမပေးပါက စည်းဝါးပြားသွားပြီး Waltz ခံစားချက် မထွက်ပေါ်နိုင်ပါ။',
        proTipMy: 'Beat 1 တွင် ပစ်ခ်ကို အားထည့်ခတ်ပြီး Beat 2, 3 တွင် လက်ကောက်ဝတ်ကို လျှော့၍ ညင်သာစွာ ခတ်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'အလိုအလျောက် 4/4 အတိုင်း ၄ ချက် ရေတွက်မိသွားခြင်း',
        fixMy: 'ခြေထောက်ဖြင့် 1-2-3, 1-2-3 ဟု အသံထွက် ရေတွက်ကာ ဦးနှောက်ကို ၃ ချက်စည်းနှင့် ယဉ်ပါးစေပါ။'
      }
    ]
  },
  {
    id: 13,
    section: 1,
    title: 'Am, Dm Chords & Bass Note Runs',
    titleMy: 'အခန်း ၁၃ - Am, Dm Chords နှင့် Bass Note Runs (ချိတ်ဆက်သံစဉ်)',
    subtitle: 'Minor Chords များဖြင့် 3/4 Progression နှင့် Bass Line ချိတ်ဆက်နည်း',
    overviewMy: 'A Minor, D Minor Chords နှင့် Chord ၂ ခုအကြား တစ်လုံးချင်း Bass Notes များဖြင့် ဆက်သွယ်တီးခတ်သော Bass Note Runs နည်းစနစ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Am (A Minor) နှင့် Dm (D Minor) သည် သီချင်း၏ အရောင်ကို နက်နဲစေသည်။',
      'Bass Note Run: Chord တစ်ခုမှ နောက်တစ်ခုသို့ ကူးပြောင်းရာတွင် ကြားခံ Bass Notes (Single notes) များကို လှေကားထစ်သဖွယ် ခတ်၍ ဆက်သွယ်ပေးခြင်း ဖြစ်သည်။',
      'ဥပမာ C မှ Am သို့ ကူးရာတွင် ကြိုး ၅ ပေါ်ရှိ C (Fret 3) -> B (Fret 2) -> A (Open) ဟူသော Bass run ဖြင့် ချိတ်ဆက်နိုင်သည်။'
    ],
    chords: ['Am', 'Dm'],
    rhythms: [
      {
        id: 'r_waltz_minor',
        name: 'V V^ V^ (1 2+ 3+)',
        timeSignature: '3/4',
        descriptionEn: 'Smooth 3/4 minor strum',
        descriptionMy: 'Minor chords များအတွက် နူးညံ့သော 3/4 ရစ်သမ်',
        spokenCount: '1, 2-and, 3-and',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_22',
        title: 'Exercise 22 - C, Am, Dm, G7 in 3/4 Time',
        titleMy: 'လေ့ကျင့်ခန်း ၂၂ - C, Am, Dm, G7 (3/4 စည်းဝါး)',
        exerciseNumber: 22,
        timeSignature: '3/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Am', bars: 1 },
          { chordName: 'Dm', bars: 1 },
          { chordName: 'G7', bars: 1 }
        ],
        notesMy: 'Minor chords များ ပါဝင်လာသဖြင့် သံစဉ် ပိုမိုနူးညံ့ ချိုသာလာသည်။'
      },
      {
        id: 'ex_23',
        title: 'Exercise 23 - Bass Note Runs Connection',
        titleMy: 'လေ့ကျင့်ခန်း ၂၃ - Bass Runs ဖြင့် Chord များကို ချိတ်ဆက်တီးခတ်ခြင်း',
        exerciseNumber: 23,
        timeSignature: '3/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'C', bars: 1 },
          { chordName: 'Am', bars: 1 },
          { chordName: 'Dm', bars: 1 },
          { chordName: 'G7', bars: 1 }
        ],
        notesMy: 'Beat 1 တွင် Chord ၏ Root bass ကို ခတ်ပြီး၊ Beat 3 တွင် နောက် Chord သို့ ကူးမည့် Bass run ကို ထည့်သွင်းပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Bass Note Runs Principle',
        nameMy: 'Bass Run ချိတ်ဆက်နည်း သဘောတရား',
        explanationMy: 'Chord တစ်ခုတည်း တီးခတ်နေမည့်အစား Bass လိုင်းလေးဖြင့် နောက် Chord သို့ လမ်းကြောင်းခင်းပေးခြင်းဖြင့် ပရော်ဖက်ရှင်နယ် အသံထွက်စေသည်။',
        proTipMy: 'Bass run တီးနေစဉ် စည်းဝါး (Tempo) မပြေးသွားစေရန် အထူးသတိထားပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Bass run တီးပြီးနောက် နောက် Chord ကို အချိန်မီ မဖမ်းနိုင်ခြင်း',
        fixMy: 'Bass run ၏ နောက်ဆုံး Note သည် နောက် Chord ၏ Root note ဖြစ်သောကြောင့် ထို Note ဖိရင်းနှင့် ကျန်လက်ချောင်းများကို တပြိုင်နက် ချပါ။'
      }
    ]
  },
  {
    id: 14,
    section: 1,
    title: 'Cmaj7, Fmaj7 Chords & Sixteenth Note Rhythm (1 e + a)',
    titleMy: 'အခန်း ၁၄ - Cmaj7, Fmaj7 Chords နှင့် 16th Note Rhythm (1 e + a)',
    subtitle: 'Major 7th Chords ဖွဲ့စည်းပုံနှင့် မြန်ဆန်သော 16th Note (Semiquaver) ရစ်သမ်',
    overviewMy: 'နူးညံ့ညင်သာသော Major 7th (Cmaj7, Fmaj7) Chords များနှင့် တစ်ချက်တွင် ၄ ခါ ခတ်ရသော 16th Note ရစ်သမ် (1 e + a) ကို လေ့ကျင့်မည်။',
    keyPointsMy: [
      'Major 7th (maj7) နှင့် Dominant 7th (7) ကို လုံးဝ မရောထွေးပါနှင့် (Cmaj7 သည် ချိုသာပြီး C7 သည် Blues ဆန်သည်)။',
      '16th Note (Semiquaver): 1 Beat လျှင် ၄ ချက် (Down Up Down Up) အမြန်ခတ်ရသည်။',
      'ရေတွက်ပုံ အသံထွက်: "1 e + a" (One-ee-and-ah) ဖြစ်သည်။',
      '16th Note ပါသော ရစ်သမ်: | V V V^V^ V | (1, 2, 3e+a, 4)။'
    ],
    chords: ['Cmaj7', 'Fmaj7'],
    rhythms: [
      {
        id: 'r_sixteenth_beat3',
        name: '16th Note Rhythm on Beat 3 (Exercise 24)',
        timeSignature: '4/4',
        descriptionEn: '1, 2, 3e+a, 4 (Fast 4-strum burst on beat 3)',
        descriptionMy: 'Beat 3 တွင် ၄ ချက် အမြန်ခတ်သော 16th Pattern',
        spokenCount: '1, 2, 3-ee-and-ah, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down', sixteenth: true },
          { count: 'e', type: 'up', sixteenth: true },
          { count: '+', type: 'down', sixteenth: true },
          { count: 'a', type: 'up', sixteenth: true },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_24',
        title: 'Exercise 24 - Cmaj7 16th Note Timing Practice',
        titleMy: 'လေ့ကျင့်ခန်း ၂၄ - Cmaj7 ဖြင့် 16th Rhythm စည်းဝါးကျင့်ခြင်း',
        exerciseNumber: 24,
        timeSignature: '4/4',
        recommendedBpm: 70,
        chords: [
          { chordName: 'Cmaj7', bars: 4 }
        ],
        notesMy: 'စတင်လေ့ကျင့်ချိန်တွင် Tempo ကို နှေးနှေးထားပြီး လက်ခုပ်ဖြင့် အရင်တီးကြည့်ပါ။'
      },
      {
        id: 'ex_25',
        title: 'Exercise 25 - Major 7th Progression with 16th Notes',
        titleMy: 'လေ့ကျင့်ခန်း ၂၅ - Cmaj7 နှင့် Fmaj7 သံစဉ်တွဲ',
        exerciseNumber: 25,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'Cmaj7', bars: 1 },
          { chordName: 'Fmaj7', bars: 1 },
          { chordName: 'Cmaj7', bars: 1 },
          { chordName: 'Fmaj7', bars: 1 }
        ],
        notesMy: 'နူးညံ့ပြီး လှပသော Modern Acoustic / Bossa / Pop အသံအရောင် ထွက်ပေါ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: '16th Note Syllables (1 e + a)',
        nameMy: '16th Note ရေတွက်နည်း (One-ee-and-ah)',
        explanationMy: '1 beat အတွင်း တိကျညီညာသော ၄ ချက် ဖြစ်စေရန် ပါးစပ်မှ "One-ee-and-ah, Two-ee-and-ah" ဟု အသံထွက်ပါ။',
        proTipMy: 'လက်ကောက်ဝတ်ကို လုံးဝ မတောင့်တင်းစေဘဲ ပေါ့ပါးစွာ ခတ်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: '3e+a ခတ်ရာတွင် အရှိန်လွန်ပြီး Beat 4 နောက်ကျသွားခြင်း',
        fixMy: 'ခြေထောက်ဖြင့် Beat 1, 2, 3, 4 ကိုသာ ပုံမှန်ချပါ။ ခြေထောက်ချချိန်တိုင်း Beat အသစ် ကျရောက်ရမည်။'
      }
    ]
  },
  {
    id: 15,
    section: 1,
    title: 'Amaj7, Dmaj7, Gmaj7 & Deadened String Technique (X)',
    titleMy: 'အခန်း ၁၅ - Amaj7, Dmaj7, Gmaj7 Chords နှင့် Deadened Strings (X)',
    subtitle: 'Major 7th Chords အစုံ၊ Deadened String (X) နှင့် 2-Bar Maj7 Progression',
    overviewMy: 'Amaj7, Dmaj7, Gmaj7 Chords များ၊ မလိုလားအပ်သော အသံကို ဖျောက်သည့် Deadened String (X) နည်းစနစ်နှင့် ၂ Bar ရစ်သမ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'Gmaj7: ကြိုး ၆ Fret 3 တွင် Finger 2 ဖိပြီး၊ ၎င်း Finger 2 ၏ ကိုယ်ထည်ဖြင့် ကြိုး ၅ ကို အသာထိကာ အသံတိတ် (Deadened X) ထားရသည်။',
      'Dmaj7: Finger 1 ဖြင့် ကြိုး ၁၊ ၂၊ ၃ အား Fret 2 တွင် Barre ဖိနိုင်သည်။',
      'Deadened String (X): ဖိအားမထည့်ဘဲ လက်ချောင်းဖြင့် အသာထိထားခြင်းဖြင့် Strum ခတ်ရာတွင် မလိုလားအပ်သော ကြိုးသံ မထွက်အောင် ထိန်းချုပ်သည်။'
    ],
    chords: ['Amaj7', 'Dmaj7', 'Gmaj7'],
    rhythms: [
      {
        id: 'r_maj7_two_bar',
        name: '2-Bar Major 7th Rhythm',
        timeSignature: '3/4',
        descriptionEn: 'Bar 1: | V^ V^ V | Bar 2: | V V^ V | (3/4)',
        descriptionMy: '3/4 တွင် အလွန်နားဝင်ချိုသော ၂ Bar ရစ်သမ်',
        spokenCount: '1+ 2+ 3 | 1 2+ 3',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up' },
          { count: '3', type: 'down' }
        ],
        defaultBpm: 90
      }
    ],
    exercises: [
      {
        id: 'ex_26',
        title: 'Exercise 26 - Major 7th Multi-Key Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၂၆ - Major 7th သံစဉ်စုံတွဲ (3/4 စည်းဝါး)',
        exerciseNumber: 26,
        timeSignature: '3/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'Cmaj7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'Amaj7', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'Dmaj7', bars: 1 },
          { chordName: 'F', bars: 1 },
          { chordName: 'Fmaj7', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'Cmaj7', bars: 1 },
          { chordName: 'C', bars: 1 }
        ],
        notesMy: 'Major မှ Major 7th သို့ ကူးရာတွင် လက်ချောင်း ၁ ချောင်းသာ လှုပ်ရှားရသည်ကို သတိပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Deadened String Technique (X)',
        nameMy: 'ကြိုးသံဖျောက်နည်း (Deadened String)',
        explanationMy: 'Chord Diagram တွင် "X" ပြထားသော ကြိုးများကို လက်ချောင်း၏ အသားဖြင့် အသာထိထားပါက Strum ခတ်မိသော်လည်း အသံဆူညံခြင်း မဖြစ်တော့ပါ။',
        proTipMy: 'Gmaj7 တွင် Finger 2 ဖြင့် ကြိုး ၅ ကို Mute လုပ်ထားခြင်းသည် အသံအထွက် သန့်ရှင်းစေရန် သော့ချက်ဖြစ်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Gmaj7 တီးရာတွင် ကြိုး ၅ မှ မလိုလားအပ်သော အသံမြည်နေခြင်း',
        fixMy: 'Finger 2 ကို ကြိုး ၆ ဖိထားစဉ် အနည်းငယ် လှဲချပြီး ကြိုး ၅ ကို အသာထိထားပေးပါ။'
      }
    ]
  },
  {
    id: 16,
    section: 1,
    title: 'The Chromatic Scale, Sharps (#), Flats (b) & Enharmonics',
    titleMy: 'အခန်း ၁၆ - Chromatic Scale၊ Sharps (#)၊ Flats (b) နှင့် Enharmonics',
    subtitle: 'Fretboard တစ်လျှောက် 12 Notes အပြည့်အစုံ ဖွဲ့စည်းပုံ',
    overviewMy: 'ဂီတရှိ အသံ ၁၂ သံလုံးပါဝင်သော Chromatic Scale၊ Sharp (# = ၁ Fret မြှင့်), Flat (b = ၁ Fret လျှော့) နှင့် နာမည် ၂ မျိုးရှိသော်လည်း အသံတူသော Enharmonic Notes များကို လေ့လာမည်။',
    keyPointsMy: [
      'Chromatic Scale သည် Semitone (၁ Fret စီ) အစီအစဉ်အတိုင်း တက်သွားသော Scale ဖြစ်သည်။',
      'Sharp (#): အသံကို 1 Semitone (၁ Fret) မြှင့်တင်ပေးသည်။',
      'Flat (b): အသံကို 1 Semitone (၁ Fret) လျှော့ချပေးသည်။',
      'Enharmonic Notes: F# နှင့် Gb, A# နှင့် Bb, C# နှင့် Db, D# နှင့် Eb, G# နှင့် Ab တို့သည် Fret တူပြီး အသံတူသော်လည်း အမည် ၂ မျိုး ခေါ်ဆိုနိုင်သည်။',
      'B/C နှင့် E/F ကြားတွင် Sharp/Flat မရှိပါ (မူလကတည်းက Semitone ကွာဝေးသောကြောင့် ဖြစ်သည်)။'
    ],
    chords: ['A', 'D', 'E'],
    rhythms: [
      {
        id: 'r_chromatic_bass',
        name: 'Chromatic Bass Run Rhythm',
        timeSignature: '4/4',
        descriptionEn: 'Bass walking lines in 4/4',
        descriptionMy: 'Chromatic Bass Notes များဖြင့် ဆက်သွယ်တီးခတ်ခြင်း',
        spokenCount: '1, 2, 3, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_27',
        title: 'Exercise 27 - Progression in A with Chromatic Bass Runs',
        titleMy: 'လေ့ကျင့်ခန်း ၂၇ - Chromatic Bass Runs ပါဝင်သော Progression in A',
        exerciseNumber: 27,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'A', bars: 2 },
          { chordName: 'D', bars: 2 },
          { chordName: 'E', bars: 2 },
          { chordName: 'A', bars: 2 }
        ],
        notesMy: 'Bar 2 တွင် 5th string (0 -> 2 -> 4 Fret - A, B, C#) Bass run ဖြင့် D သို့ ကူးပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Chromatic Bass Walking',
        nameMy: 'Chromatic လှေကားထစ် Bass လိုင်း',
        explanationMy: 'Chord ပြောင်းရာတွင် Semitone အဆင့်ဆင့် (ဥပမာ E -> F -> F# -> G) တက်သွားသော Bass run ကို သုံးခြင်းဖြင့် Blues နှင့် Jazz အရသာကို ဖန်တီးပေးသည်။',
        proTipMy: 'Bass note အသံများကို တိကျပြတ်သားစွာ ခတ်ပါ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Sharp နှင့် Flat ကို Fret ပေါ်တွင် တွက်ချက်ရ ခက်ခဲခြင်း',
        fixMy: 'ညာဘက် (Body ဘက်) သို့ ၁ Fret ရွှေ့လျှင် Sharp (#) ဖြစ်ပြီး၊ ဘယ်ဘက် (Head ဘက်) သို့ ၁ Fret ရွှေ့လျှင် Flat (b) ဖြစ်သည်ဟု မှတ်သားပါ။'
      }
    ]
  },
  {
    id: 17,
    section: 1,
    title: 'Bm Chord, Triplet Rhythm & Turnaround in D',
    titleMy: 'အခန်း ၁၇ - Bm Chord၊ Triplet Rhythm (1+a 2+a) နှင့် Turnaround in D',
    subtitle: 'B Minor Chord ဖမ်းနည်းနှင့် 1 Beat လျှင် ၃ ချက်ခတ်သော Triplet Strumming',
    overviewMy: 'အရေးပါသော B Minor Chord၊ 1 Beat လျှင် ၃ ချက် ညီညီညာညာ ခတ်သော Triplet Rhythm (12 Strums per bar) နှင့် Key of D Turnaround (D - Bm - G - A) ကို သင်ယူမည်။',
    keyPointsMy: [
      'Bm Chord (Open Form): ကြိုး ၅ နှင့် ၆ ကို မတီးရပါ။ ကြိုး ၄ Fret 4, ကြိုး ၃ Fret 4, ကြိုး ၂ Fret 3, ကြိုး ၁ Fret 2 တွင် ဖိပါ။',
      'Triplet Rhythm: 1 Beat အတွင်း ၃ ချက် ညီမျှစွာ ခတ်သည် (1 + a 2 + a 3 + a 4 + a)။ 4/4 Bar တစ်ခုတွင် စုစုပေါင်း ၁၂ ချက် ဖြစ်သည်။',
      'ခြေထောက်သည် ၄ ချက်သာ စည်းလိုက်ရမည်ဖြစ်ပြီး Beat တိုင်း၏ ပထမအချက်ကို အလေးပေး (Accent) ခတ်ရမည်။',
      'Turnaround in D: D - Bm - G - A ဖြစ်သည်။'
    ],
    chords: ['Bm'],
    rhythms: [
      {
        id: 'r_triplet_full',
        name: 'Full Triplet Rhythm (12 Strums/Bar)',
        timeSignature: '4/4',
        descriptionEn: '| VVV VVV VVV VVV | (1+a 2+a 3+a 4+a) with down strums',
        descriptionMy: 'တစ် Bar လျှင် ၁၂ ချက် Down Strum ဖြင့် ခတ်သော Triplet',
        spokenCount: '1-and-a, 2-and-a, 3-and-a, 4-and-a',
        beats: [
          { count: '1', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '2', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '3', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '4', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true }
        ],
        defaultBpm: 75
      },
      {
        id: 'r_triplet_hybrid',
        name: 'Hybrid Triplet Strum (Exercise 31)',
        timeSignature: '4/4',
        descriptionEn: 'V (1), VVV (2+a), VVV (3+a), V (4)',
        descriptionMy: 'Beat 1, 4 တွင် Down ၁ ချက်၊ Beat 2, 3 တွင် Triplet ၃ ချက်ခတ်သော ပုံစံ',
        spokenCount: '1, 2-and-a, 3-and-a, 4',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '3', type: 'down', accent: true, triplet: true },
          { count: '+', type: 'down', triplet: true },
          { count: 'a', type: 'down', triplet: true },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_28',
        title: 'Exercise 28 - Turnaround 2 in G (G - Bm - C - D)',
        titleMy: 'လေ့ကျင့်ခန်း ၂၈ - Bm ပါဝင်သော Turnaround (G - Bm - C - D)',
        exerciseNumber: 28,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Bm', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 }
        ],
        notesMy: 'Em အစား Bm ကို အစားထိုးသုံးထားသော Turnaround No. 2 ပုံစံဖြစ်သည်။'
      },
      {
        id: 'ex_31',
        title: 'Exercise 31 - Turnaround No. 1 in Key of D (D - Bm - G - A)',
        titleMy: 'လေ့ကျင့်ခန်း ၃၁ - Key of D Turnaround (D - Bm - G - A)',
        exerciseNumber: 31,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'D', bars: 1 },
          { chordName: 'Bm', bars: 1 },
          { chordName: 'G', bars: 1 },
          { chordName: 'A', bars: 1 }
        ],
        notesMy: 'Queen, 50s Rock n Roll သီချင်းများစွာတွင် သုံးသော D Key သံစဉ်တွဲ ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Triplet Accentuation',
        nameMy: 'Triplet စည်းချက် အလေးပေးခတ်နည်း',
        explanationMy: 'Triplet တီးရာတွင် ခြေထောက်သည် ခတ်တိုင်း မလိုက်ရပါ။ ခြေထောက် ၁ ချက်ချချိန်တွင် အောက်သို့ ၃ ချက် ညီညီခတ်ရပြီး ပထမအချက်ကို အားထည့်ခတ်ပါ။',
        proTipMy: '"One-and-a, Two-and-a" ဟူသော စည်းဝါးကို စိတ်ထဲတွင် စီးမျောနေပါစေ။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Bm Chord တီးရာတွင် 1st string အသံသေနေခြင်း',
        fixMy: 'Finger 1 (1st string 2nd fret) အား လက်ချောင်း အခြားကြိုးများနှင့် မထိအောင် သေချာ ထောင်ထားပါ။'
      }
    ]
  },
  {
    id: 18,
    section: 1,
    title: 'E6, A6 Chords, Blues with 6ths & The Major Scale Theory',
    titleMy: 'အခန်း ၁၈ - E6, A6 Chords၊ 6th Blues နှင့် Major Scale သီအိုရီ',
    subtitle: 'E - E6 - E7 - E6 လှုပ်ရှားမှုနှင့် Major Scale အခြေခံ (T-T-S-T-T-T-S)',
    overviewMy: 'Rock/Blues တွင် အထူးနာမည်ကြီးသော 6th Chords (E6, A6) လှုပ်ရှားမှုနှင့် ဂီတသီအိုရီ၏ အခြေခံအုတ်မြစ် Major Scale ပုံသေကားချပ်ကို သင်ယူမည်။',
    keyPointsMy: [
      'E6 & A6: 6th note ကို ပေါင်းထည့်ထားသော Chords များဖြစ်ပြီး Blues Boogie-woogie တွင် အလွန်သုံးသည်။',
      'Blues in E with 6ths: E -> E6 -> E7 -> E6 သို့ လက်သန်း (Finger 4) ဖြင့် Slide ရွှေ့၍ တီးခတ်သည်။',
      'Major Scale Formula: Tone - Tone - Semitone - Tone - Tone - Tone - Semitone (T-T-S-T-T-T-S)။',
      'C Major Scale: C - D - E - F - G - A - B - C (E-F နှင့် B-C သည် Semitone ဖြစ်ပြီး ကျန်အသံများ Tone ဖြစ်သည်)။',
      'Roman Numerals: I, II, III, IV, V, VI, VII, VIII (1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th) ဖြင့် အသံများနှင့် Chords များကို ကိုယ်စားပြုသည်။'
    ],
    chords: ['E6', 'A6'],
    rhythms: [
      {
        id: 'r_blues_6th',
        name: '4-Chord per Bar Blues Strum',
        timeSignature: '4/4',
        descriptionEn: '| V V V V | (Change chord on every beat: E, E6, E7, E6)',
        descriptionMy: 'Beat တိုင်းတွင် Chord ပြောင်းသော ရစ်သမ် (E -> E6 -> E7 -> E6)',
        spokenCount: '1 (E), 2 (E6), 3 (E7), 4 (E6)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 80
      }
    ],
    exercises: [
      {
        id: 'ex_32',
        title: 'Exercise 32 - 12 Bar Blues with 6th and 7th Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၃၂ - 6th & 7th Chords ပါဝင်သော ၁၂ Bar Blues in E',
        exerciseNumber: 32,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'E', bars: 4 },
          { chordName: 'A', bars: 2 },
          { chordName: 'E', bars: 2 },
          { chordName: 'B7', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'B7', bars: 1 }
        ],
        notesMy: 'Bar တစ်ခုချင်းစီတွင် E - E6 - E7 - E6 (သို့မဟုတ် A - A6 - A7 - A6) အစဉ်အတိုင်း လက်သန်းဖြင့် ချောမွေ့စွာ ကူးပါ။'
      },
      {
        id: 'ex_33_scale',
        title: 'Exercise 33 - C Major Scale on Staff & Tab',
        titleMy: 'လေ့ကျင့်ခန်း ၃၃ - C Major Scale တစ်လုံးချင်း တီးခတ်ခြင်း',
        exerciseNumber: 33,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'C', bars: 2 }
        ],
        tabNotes: [
          { string: 5, fret: 3, duration: '1/4', label: 'C (I)' },
          { string: 4, fret: 0, duration: '1/4', label: 'D (II)' },
          { string: 4, fret: 2, duration: '1/4', label: 'E (III)' },
          { string: 4, fret: 3, duration: '1/4', label: 'F (IV)' },
          { string: 3, fret: 0, duration: '1/4', label: 'G (V)' },
          { string: 3, fret: 2, duration: '1/4', label: 'A (VI)' },
          { string: 2, fret: 0, duration: '1/4', label: 'B (VII)' },
          { string: 2, fret: 1, duration: '1/4', label: 'C (VIII)' }
        ],
        notesMy: 'Do-Re-Mi-Fa-Sol-La-Ti-Do အသံစဉ်ကို နားထောင်ပြီး မှတ်သားပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Pinky Slide from 6th to 7th',
        nameMy: 'လက်သန်း လျှောရွှေ့နည်း (6th to 7th Slide)',
        explanationMy: 'E6 မှ E7 သို့ ကူးရာတွင် လက်သန်း (Finger 4) ကို 2nd string Fret 2 မှ Fret 3 သို့ မကြွဘဲ လျှောရွှေ့ပေးပါ။',
        proTipMy: 'ချောမွေ့သော Rock n Roll စည်းချက် ထွက်ပေါ်စေရန် အထူးအသုံးဝင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: '1 Beat တိုင်း Chord ပြောင်းရာတွင် လက်ချောင်းများ မလိုက်နိုင်ခြင်း',
        fixMy: 'Finger 1, 2, 3 ကို E chord ပုံစံအတိုင်း အမြဲဖိထားပြီး လက်သန်း (Finger 4) တစ်ချောင်းတည်းကိုသာ ဖွင့်/ပိတ်/လျှော ပြုလုပ်ပါ။'
      }
    ]
  },
  {
    id: 19,
    section: 1,
    title: 'Two-String Rock Chords (Power/Boogie Chords)',
    titleMy: 'အခန်း ၁၉ - ကြိုး ၂ ချောင်း Rock Chords (A, A6, D, D6, E, E6)',
    subtitle: 'Classic Rock, Nirvana, AC/DC နှင့် Chuck Berry တို့၏ 2-String Rock Rhythm',
    overviewMy: 'Rock ဂစ်တာတွင် အသံမာမာနှင့် လေးနက်သော သံစဉ်ဖန်တီးပေးသည့် ကြိုး ၂ ချောင်းသာ ခတ်သော Rock Chords (A-A6, D-D6, E-E6) ကို ကျွမ်းကျင်အောင် လေ့လာမည်။',
    keyPointsMy: [
      'Rock Chords: ကြိုး ၆ ချောင်းစလုံး မခတ်ဘဲ ကြိုး ၂ ချောင်းတည်းကိုသာ ရွေးခတ်သော နည်းစနစ်ဖြစ်သည်။',
      'A Rock Chord: ကြိုး ၅ Open နှင့် ကြိုး ၄ Fret 2 (Finger 1)။ A6: ကြိုး ၄ Fret 4 (Finger 3) ထပ်ဖိသည်။',
      'D Rock Chord: ကြိုး ၄ Open နှင့် ကြိုး ၃ Fret 2 (Finger 1)။ D6: ကြိုး ၃ Fret 4 (Finger 3)။',
      'E Rock Chord: ကြိုး ၆ Open နှင့် ကြိုး ၅ Fret 2 (Finger 1)။ E6: ကြိုး ၅ Fret 4 (Finger 3)။',
      'တီးခတ်ရာတွင် သတ်မှတ်ထားသော ကြိုး ၂ ချောင်းမှလွဲ၍ ကျန်ကြိုးများကို လုံးဝ မထိခတ်မိစေရန် ပစ်ခ်ကို ထိန်းချုပ်ရမည်။'
    ],
    chords: ['A', 'D', 'E'],
    rhythms: [
      {
        id: 'r_rock_shuffle',
        name: 'Rock Boogie Shuffle (A - A6 - A - A6)',
        timeSignature: '4/4',
        descriptionEn: 'V^ V^ V^ V^ on 2 strings only',
        descriptionMy: 'ကြိုး ၂ ချောင်းပေါ်တွင် Down/Up ဖြင့် စည်းချက်ကျကျ ခတ်ခြင်း',
        spokenCount: '1+ (A), 2+ (A6), 3+ (A), 4+ (A6)',
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
        id: 'ex_34',
        title: 'Exercise 34 - A & A6 Two-String Rock Shuffle',
        titleMy: 'လေ့ကျင့်ခန်း ၃၄ - A နှင့် A6 ကြိုး ၂ ချောင်း Rock ခတ်ကွက်',
        exerciseNumber: 34,
        timeSignature: '4/4',
        recommendedBpm: 90,
        chords: [
          { chordName: 'A', bars: 4 }
        ],
        notesMy: 'Finger 1 ကို 4th string 2nd fret ပေါ်တွင် အမြဲဖိထားပြီး Finger 3 ဖြင့် 4th fret ကို အဖွင့်အပိတ် ပြုလုပ်ပါ။'
      },
      {
        id: 'ex_37',
        title: 'Exercise 37 - 12 Bar Blues in A with Rock Chords',
        titleMy: 'လေ့ကျင့်ခန်း ၃၇ - Rock Chords ဖြင့် ၁၂ Bar Blues in A',
        exerciseNumber: 37,
        timeSignature: '4/4',
        recommendedBpm: 95,
        chords: [
          { chordName: 'A', bars: 4 },
          { chordName: 'D', bars: 2 },
          { chordName: 'A', bars: 2 },
          { chordName: 'E', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'A', bars: 1 },
          { chordName: 'E', bars: 1 }
        ],
        notesMy: 'Nirvana, AC/DC, Chuck Berry စတိုင် စစ်စစ်ဖြစ်သော Rock Rhythm Progression ဖြစ်သည်။'
      }
    ],
    techniques: [
      {
        nameEn: 'Two-String Precision Picking',
        nameMy: 'ကြိုး ၂ ချောင်း သီးသန့် တိကျစွာ ခတ်နည်း',
        explanationMy: 'လက်ယာလက် ပစ်ခ်သည် ကြိုး ၅ နှင့် ၄ (သို့မဟုတ် ၄ နှင့် ၃) ကိုသာ ထိခတ်ပြီး ကျန်ကြိုးများကို မထိစေရန် လက်ကောက်ဝတ် လှုပ်ရှားမှုကို သေးငယ်စွာ ထိန်းချုပ်ပါ။',
        proTipMy: 'Finger 1 ၏ အောက်သားဖြင့် အောက်ဘက်ကြိုးများကို အသာထိကာ မတော်တဆ ခတ်မိသော်လည်း အသံမထွက်အောင် Mute လုပ်ထားနိုင်သည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'ကြိုး ၁၊ ၂၊ ၃ အသံများ ထွက်ပေါ်ပြီး Rock အသံ မထွက်ခြင်း',
        fixMy: 'Strumming ကို အပြည့်မခတ်ပါနှင့်။ ကြိုး ၂ ချောင်းပေါ်တွင်သာ Pick ကို ကပ်၍ အပေါ်အောက် ခတ်ပါ။'
      }
    ]
  },
  {
    id: 20,
    section: 1,
    title: 'Suspended Chords (Asus, Dsus, Esus) & G Major Scale',
    titleMy: 'အခန်း ၂၀ - Suspended Chords (Asus, Dsus, Esus) နှင့် G Major Scale',
    subtitle: 'Sus4 Chords တင်းအားသဘောတရားနှင့် F# ပါဝင်သော G Major Scale',
    overviewMy: 'သီချင်းများကို ဆွဲဆောင်မှုရှိစေသော Suspended 4th (Asus, Dsus, Esus) Chords နှင့် F# Key Signature ပါဝင်သော G Major Scale ကို လေ့လာမည်။',
    keyPointsMy: [
      'Suspended Chord (Sus4): 3rd note အစား 4th note ကို အစားထိုးထားသောကြောင့် ဆိုင်းငံ့တင်းအား (Suspense) ဖြစ်ပေါ်ပြီး မူလ Major သို့ ပြန်လည် ဦးတည် (Resolve) လိုသော သဘောရှိသည်။',
      'Asus (Asus4): 1 - 4 - 5 (A - D - E)။ Dsus: 1 - 4 - 5 (D - G - A)။ Esus: 1 - 4 - 5 (E - A - B)။',
      'အသုံးပြုပုံ: Major Chord ခတ်နေစဉ် Beat 2 ၏ Up strum တွင် Sus chord ကို ဖိကာ ခတ်လေ့ရှိသည်။',
      'G Major Scale: G - A - B - C - D - E - F# - G (T-T-S-T-T-T-S ပုံသေအတိုင်း ဖြစ်စေရန် F# ကို သုံးရသည်)။'
    ],
    chords: ['Asus', 'Dsus', 'Esus'],
    rhythms: [
      {
        id: 'r_sus_rhythm',
        name: 'Suspended Pop Strum (Exercise 39)',
        timeSignature: '4/4',
        descriptionEn: 'V^ V^ (Sus on 2+) .^ V',
        descriptionMy: 'Beat 2 ၏ အတက် (+) တွင် Sus chord ထည့်ခတ်သော Pop ရစ်သမ်',
        spokenCount: '1+ (Maj), 2 (Maj) + (Sus), 3+ 4 (Maj)',
        beats: [
          { count: '1', type: 'down', accent: true },
          { count: '+', type: 'up' },
          { count: '2', type: 'down' },
          { count: '+', type: 'up', accent: true }, // Sus hit
          { count: '3', type: 'air-down' },
          { count: '+', type: 'up' },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 85
      }
    ],
    exercises: [
      {
        id: 'ex_39',
        title: 'Exercise 39 - Suspended Chord Progression',
        titleMy: 'လေ့ကျင့်ခန်း ၃၉ - A-Asus, D-Dsus, E-Esus သံစဉ်တွဲ',
        exerciseNumber: 39,
        timeSignature: '4/4',
        recommendedBpm: 85,
        chords: [
          { chordName: 'A', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'E', bars: 1 },
          { chordName: 'A', bars: 1 }
        ],
        notesMy: 'Beat 2 ၏ Up stroke တွင် လက်သန်းဖြင့် Sus note ကို ထပ်ဖိပြီး Beat 3 တွင် ပြန်ကြွပါ။'
      },
      {
        id: 'ex_40_g_scale',
        title: 'Exercise 40 - G Major Scale with F#',
        titleMy: 'လေ့ကျင့်ခန်း ၄၀ - F# ပါဝင်သော G Major Scale',
        exerciseNumber: 40,
        timeSignature: '4/4',
        recommendedBpm: 80,
        chords: [
          { chordName: 'G', bars: 2 }
        ],
        tabNotes: [
          { string: 6, fret: 3, duration: '1/4', label: 'G (I)' },
          { string: 5, fret: 0, duration: '1/4', label: 'A (II)' },
          { string: 5, fret: 2, duration: '1/4', label: 'B (III)' },
          { string: 5, fret: 3, duration: '1/4', label: 'C (IV)' },
          { string: 4, fret: 0, duration: '1/4', label: 'D (V)' },
          { string: 4, fret: 2, duration: '1/4', label: 'E (VI)' },
          { string: 4, fret: 4, duration: '1/4', label: 'F# (VII)' },
          { string: 3, fret: 0, duration: '1/4', label: 'G (VIII)' }
        ],
        notesMy: '7th note သည် F ရိုးရိုး မဟုတ်ဘဲ F# (Fret 4) ဖြစ်သည်ကို သတိပြုပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Suspension & Resolution',
        nameMy: 'ဆိုင်းငံ့ခြင်းနှင့် ဖြေလျှော့ခြင်း သဘောတရား',
        explanationMy: 'Sus4 chord သည် နားထောင်သူအား ဆွဲဆောင်မှုနှင့် မျှော်လင့်ချက်ပေးပြီး မူလ Major chord သို့ ပြန်လည်ရောက်ရှိချိန်တွင် စိတ်ကျေနပ်မှု (Resolution) ရရှိစေသည်။',
        proTipMy: 'Acoustic Pop သီချင်းများတွင် D မှ Dsus4 သို့ လက်သန်းဖြင့် ကစားခြင်းသည် အလွန်ခေတ်စားသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Dsus ဖမ်းရာတွင် လက်သန်း အားမပါဘဲ အသံတိုးနေခြင်း',
        fixMy: 'Finger 1, 2, 3 ကို သေချာဖိထားပြီး လက်သန်းကို Fret သံချောင်း ကပ်လျက်တွင် တည့်တည့်ကျအောင် ဖိချပါ။'
      }
    ]
  },
  {
    id: 21,
    section: 1,
    title: 'Hammer-On (H), Pull-Off (P) & Section One Summary',
    titleMy: 'အခန်း ၂၁ - Hammer-On (H)၊ Pull-Off (P) နှင့် အပိုင်း ၁ အနှစ်ချုပ်',
    subtitle: 'လက်ဝဲလက်ချောင်းဖြင့် အသံထွက်စေသော Slur နည်းစနစ်များနှင့် Minor Blues',
    overviewMy: 'ပစ်ခ်ဖြင့် မခတ်ဘဲ လက်ဝဲလက်ချောင်းဖြင့် ရိုက်ချ (Hammer-on) သို့မဟုတ် ဆွဲခွာ (Pull-off) ၍ အသံထွက်စေသော နည်းစနစ်များနှင့် အပိုင်း ၁ တွင် သင်ယူခဲ့သော Chords ၂၅ မျိုး အနှစ်ချုပ်ကို လေ့လာမည်။',
    keyPointsMy: [
      'Hammer-on (H): ကြိုးကို Pick ဖြင့် တစ်ချက်ခတ်ပြီးနောက် နောက် Note ကို Pick မသုံးဘဲ လက်ချောင်းဖြင့် Fret ပေါ်သို့ သံတူရိုက်သကဲ့သို့ မြန်မြန်နှင့် ခိုင်မာစွာ ရိုက်ချ၍ အသံထွက်စေသည်။',
      'Pull-off (P): ဖိထားသော လက်ချောင်းကို ရိုးရိုးမကြွဘဲ ကြိုးကို အောက်သို့ အနည်းငယ် ဆွဲခွာ (Flick) လိုက်ခြင်းဖြင့် အသံထွက်စေသည်။',
      'Minor Blues (Exercise 44) တွင် Am, Dm, E7 ပေါ်၌ Hammer-on ကို စည်းချက်ကျကျ ထည့်သွင်းတီးခတ်သည်။',
      'အပိုင်း ၁ ပြီးမြောက်ပါက Chords ၂၅ မျိုး (Major, Minor, 7th, 6th, maj7, sus) နှင့် ရစ်သမ်စုံကို ကျွမ်းကျင်စွာ တီးခတ်နိုင်ပြီ ဖြစ်သည်။'
    ],
    chords: ['Am', 'Dm', 'E7'],
    rhythms: [
      {
        id: 'r_hammer_minor_blues',
        name: 'Minor Blues Hammer Rhythm (Exercise 44)',
        timeSignature: '4/4',
        descriptionEn: 'Bass pluck, Hammer-on (3+), Strum (4)',
        descriptionMy: 'Beat 3+ တွင် Hammer-on လုပ်ပြီး 4 တွင် Chord ခတ်ပါ',
        spokenCount: '1, 2, 3-and(Hammer), 4',
        beats: [
          { count: '1', type: 'bass-pick', accent: true, bassString: 5 },
          { count: '2', type: 'down' },
          { count: '3', type: 'down' },
          { count: '+', type: 'up', hammerOn: true },
          { count: '4', type: 'down' }
        ],
        defaultBpm: 75
      }
    ],
    exercises: [
      {
        id: 'ex_44_minor_blues',
        title: 'Exercise 44 - Minor Blues with Hammer-Ons',
        titleMy: 'လေ့ကျင့်ခန်း ၄၄ - Hammer-Ons ပါဝင်သော Minor Blues (Am, Dm, E7)',
        exerciseNumber: 44,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'Am', bars: 4 },
          { chordName: 'Dm', bars: 2 },
          { chordName: 'Am', bars: 2 },
          { chordName: 'E7', bars: 1 },
          { chordName: 'Dm', bars: 1 },
          { chordName: 'Am', bars: 2 }
        ],
        notesMy: 'Am ဖိထားစဉ် Finger 2 ကို ကြွ၍ 4th string open ခတ်ကာ Fret 2 သို့ Hammer-on ရိုက်ချပါ။'
      },
      {
        id: 'ex_46_triplet_hp',
        title: 'Exercise 46 - Triplet Hammer-On & Pull-Off (G, Em, C, D, Gmaj7)',
        titleMy: 'လေ့ကျင့်ခန်း ၄၆ - Triplet H-P ပေါင်းစပ်လေ့ကျင့်ခန်း',
        exerciseNumber: 46,
        timeSignature: '4/4',
        recommendedBpm: 75,
        chords: [
          { chordName: 'G', bars: 1 },
          { chordName: 'Em', bars: 1 },
          { chordName: 'C', bars: 1 },
          { chordName: 'D', bars: 1 },
          { chordName: 'Gmaj7', bars: 1 }
        ],
        notesMy: 'Beat 3 တွင် 0 -> 2 (Hammer) -> 0 (Pull-off) Triplet လှုပ်ရှားမှုကို ပြုလုပ်ပါ။'
      }
    ],
    techniques: [
      {
        nameEn: 'Hammer-On & Pull-Off Precision',
        nameMy: 'Hammer-On နှင့် Pull-Off အသံကြည်လင်မှု',
        explanationMy: 'Hammer-on ပြုလုပ်ရာတွင် လက်ချောင်းထိပ်ဖြင့် Fret ၏ ကပ်လျက်နောက်သို့ လျင်မြန်အားပါစွာ ရိုက်ချရမည်။ Pull-off ပြုလုပ်ရာတွင် လက်ချောင်းကို ဘေးဘက်သို့ အနည်းငယ် ခြစ်ဆွဲရပါမည်။',
        proTipMy: 'ဂစ်တာရစ်သမ်တွင် H နှင့် P ကို ထည့်သွင်းခြင်းဖြင့် Acoustic စတိုင် အထူးလှပစေသည်။'
      }
    ],
    troubleshooting: [
      {
        issueMy: 'Hammer-on ရိုက်ချသော်လည်း အသံ အလွန်တိုးနေခြင်း',
        fixMy: 'လက်ချောင်းကို အဝေးမှ ချိန်မရွယ်ပါနှင့်။ ကြိုးနားကပ်ပြီး တိကျလျင်မြန်စွာ ရိုက်ချပါ။'
      }
    ]
  }
];
