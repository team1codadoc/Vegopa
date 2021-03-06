const mbtiQuestion: mbtiQuestionsType = [
  {
    selects: [
      {
        text: "물렁 복숭아",
        id: "1",
        title: "달콤한 물복을 좋아하는 당신,",
        contents: "친구들 사이에 인기 많은 인싸군요! 남들하고 어울리기를 좋아합니다.",
        short: "물",
      },
      {
        text: "딱딱한 복숭아",
        id: "2",
        title: "딱복먹는 아싸,",
        contents: ` 남들하고 어울리기보다는 집에 "딱"; 박혀있어서 혼자있는 시간을 좋아하는 군요!친구들과
      같이 먹기보다는 혼밥을 좋아하는 사람!
      개성있는 민초를 좋아하는 당신, 감성적이며 자유로운 상상, 개방적 사고에 뛰어납니다! 밥을 먹을때 가게의 분위기를
      중요시 여기는군요!`,

        short: "딱",
      },
    ],
  },
  {
    selects: [
      {
        text: "민트초코",
        id: "3",
        title: "개성있는 민초를 좋아하는 당신,",
        contents: `감성적이며 자유로운 상상, 개방적 사고에 뛰어납니다! 
      밥을 먹을때 가게의 분위기를 중요시 여기는군요!`,

        short: "민",
      },
      {
        text: "반민트초코",
        id: "4",
        title: "치약을 왜 먹는지 이해하지 못하는 당신!",
        contents: `현실적이고 실용적입니다! 사실적이고 구체적입니다.
      쓸데없는 상상을 싫어하는군요! 음식점에서 가장 중요한건 음식의 맛이라고 생각합니다!`,

        short: "반",
      },
    ],
  },
  {
    selects: [
      {
        text: "탕수육 부먹",
        id: "5",
        title: "근.본. 부먹을 선택한 당신 ,",
        contents:
          "눅눅하고 원칙적인것을 좋아합니다. 고집이 있는편이나 결정을 잘내리는 편입니다. 보통 친구들끼리 메뉴를 정할떄 주체가 되는 사람입니다.",

        short: "부",
      },
      {
        text: "탕수육 찍먹",
        id: "6",
        title: "바삭한것을 좋아하고 공감을 잘하는 당신,",
        contents: ` 사람들의 이야기를 잘 들어주고 고민상담 전문가입니다, 하지만 결정을 잘 못내리고 보통 남에게 
      의존하는 편입니다.`,
        short: "찍",
      },
    ],
  },
  {
    selects: [
      {
        text: "물냉면",
        id: "7",
        title: "물냉을 선택한 당신,",
        contents: `삼시세끼를 자기전에 정하시는 분이군요!
      메뉴를 고를떄 체계적인 편입니다. 시간은 오래 걸릴 수 있으나 물냉러들이 골라주는 메뉴는 
      열에 아홉은 성공하는편입니다.`,

        short: "물",
      },
      {
        text: "비빔냉면",
        id: "8",
        title: " 정해진 길을 가지 않고 나만의 길을 추구하는 비빔예술인입니다,",
        contents:
          "똑같은 메뉴보다는 자신의 feeling 을 중요하게 생각합니다.즉흥적으로 새로운 것에 도전하는 것을 좋아하는군요",
        short: "비",
      },
    ],
  },
];

export type mbtiQuestionType = { text: string; id: string; contents: string; title: string; short: string };
type mbtiQuestionsType = { selects: mbtiQuestionType[] }[];
export { mbtiQuestion };
