import Vue from "vue";
import Vuex from "vuex";
import { mutations } from "./mutations";
import { actions } from "./actions";
import { getters } from "./getters";

export const defaultState = () => {
  return {
    videoPlaylist: {
      Worship: [],
      "Our Story": [],
      Preach: [],
      "C3 Kids": [],
    },
    categories: [
      {
        color: "c3-green",
        label: "Select your worship",
        name: "Worship",
        required: true,
      },
      {
        color: "c3-orange",
        label: "Select your story",
        name: "Our Story",
        required: false,
      },
      {
        color: "c3-red",
        label: "Select your preach",
        name: "Preach",
        required: true,
      },
      {
        color: "c3-beige",
        label: "Select your c3 kids episode",
        name: "C3 Kids",
        required: false,
      },
    ],
    videosByCategory: {
      Worship: [
        {
          title: "How Great Thou Art",
          id: "1O2yMF58yaA",
          time: "5:37",
        },
        {
          title: "I Stand In Christ",
          id: "P3v7Z8JS2mk",
          author: "C3 Toronto",
          time: "4:42",
        },
        {
          title: "Heart Of God",
          id: "0wwl5_d7Ga8",
          author: "Hillsong Music",
          time: "8:06",
        },
        {
          title: "Never Lost",
          id: "-NJcKiNSECs",
          author: "Elevation Worship",
          time: "4:27",
        },
        {
          title: "Wake Up O Sleeper",
          id: "xD_e5g7F16A",
          author: "C3 Music",
          time: "3:50",
        },
        {
          title: "Holy Ghost",
          id: "9nnoN5_OKKU",
          author: "Maverick City Music",
          time: "4:33",
        },
        {
          title: "Thank you Jesus",
          id: "4_qJcG4of5o",
          author: "C3 Toronto",
          time: "5:33",
        },
        {
          title: "Story of Hope",
          id: "ufX_VV6EyZk",
          author: "C3 Toronto",
          time: "4:18",
        },
      ],
      "Our Story": [
        {
          title: "Esther & Ayo",
          id: "LJB0fvoon0M",
          time: "3:51",
        },
        {
          title: "Brittney",
          id: "lOQgzeSajdM",
          time: "3:46",
        },
        {
          title: "Walter",
          id: "ctUxuk7tPSM",
          time: "6:08",
        },
        {
          title: "Victor",
          id: "DcLb5qxWuVM",
          time: "3:56",
        },
        {
          title: "Sherry",
          id: "wBnYPPX6B5g",
          time: "3:29",
        },
        {
          title: "Ji & Mariam",
          id: "GpPeWmInFew",
          time: "3:52",
        },
        {
          title: "Samuel & Genevieve",
          id: "Peia8mI-3aM",
          time: "3:56",
        },
        {
          title: "Tania",
          id: "JQwiEFEuANU",
          time: "3:43",
        },
      ],
      Preach: [
        {
          title: "What Do You See?",
          id: "hJ7gFNhIvzM",
          author: "Ps Jojo Ariwi",
          time: "31:10",
          description:
            "What differentiates a Christian and a good person? What is the gospel standard of love? Listen in as Ps. Jojo encourages us to lean on the gospel to renew our minds and be ambassadors of Christ in our thoughts, words, and most of all, our actions.",
        },
        {
          title: "Real Love",
          id: "PATWGTTkoNw",
          author: "Ps Gerry Duraisamy",
          time: "26:50",
          description:
            "Do you know what love is? Have you ever felt real love? Lean is as Ps. Gerry reminds us that our mission is to spread real love by following Jesus's example of a love that is inviting, humbling, and inclusive.",
        },
        {
          title: "Christ In Us",
          id: "gLv95_NmeFQ",
          author: "Ps Sam Picken",
          time: "30:58",
          description:
            "What are you wrestling with right now? What is your source of hope? Lean is as Ps. Sam encourages us to discover Christ within us and accept Him as our Lord and Saviour in order to become who we are truly created to be. ",
        },
        {
          title: "Who Are You O Great Mountain",
          id: "pITrnKktbdM",
          author: "Ps Andrew Beresford",
          time: "38:24",
          description:
            "Do you sometimes see yourself categorizing others? Have you ever been labeled based on certain attributes? Lean is as Ps. Andrew of Serve City Church shares that even the Bible tells us of inequity but God's plan is so much bigger than our comfortability and preferences, and the only way that we will be able to love all amidst pain is through the power of the Holy Spirit. ",
        },
        {
          title: "Worship Is The Most Powerful Key",
          id: "NqegBKr7MHQ",
          author: "Ps Sam Picken",
          time: "29:34",
          description:
            "Do you feel overwhelmed or stuck? Are you fighting a battle and feel like giving up? Lean is as Ps. Sam reminds us that worship is the key to treasures and through worship, we will find peace, wisdom, and the reassurance that God is in control. ",
        },
        {
          title: "Lay Down, Make Yourself Uncomfortable",
          id: "jlP8y492Yhk",
          author: "Ps Greg Fry",
          time: "27:24",
          description:
            "What is God asking from you? How do you respond when He speaks to you? Lean is as Ps. Greg encourages us to act quickly when God asks us to move and focus not on the sacrifice but on His promise. ",
        },
        {
          title: "Make Room",
          id: "sAnq89U_TJg",
          author: "Chrissy Burow",
          time: "32:41",
          description:
            "Do you honour God with your life? Do you have faith in God when life happens? Lean in as Chrissy encourages us to spend time with God and to put Him in His rightful place because honouring Him is a lifestyle and the evidence of honour is faith.",
        },
        {
          title: "Fix Your Eyes",
          id: "G6r0hHhgR44",
          author: "Ps Jess Picken",
          time: "29:30",
          description:
            "What have you been chasing this season? What are you fixing your eyes on? Lean in and be encourages as Ps. Jess reminds us that our God is bigger than pain, uncertainty, or fear; so be still and fix your eyes on Him for He is working behind the scenes to give you more than what you can imagine.",
        },
      ],
      "C3 Kids": [
        {
          title: "Fear Not - Worship",
          id: "RPb_xy58_6I",
          time: "4:22",
          description:
            "Rocco catches Sierra in the middle of a worship dance party, and together they learn how worship makes our fears and worries fade away!",
        },
        {
          title: "Grow with God",
          id: "3I8NqkrLR-M",
          time: "4:41",
          description:
            "Rocco's having trouble sticking to his workout routine - but Sierra encourages him that we will grow stronger in faith and physically as long as we don't give up!",
        },
        {
          title: "Heroes of the Bible - David",
          id: "cAVNrwOXtmI",
          time: "4:18",
          description:
            "Rocco and Fox are learning about the Heroes of the Bible - and in this episode they find out how David had faith in God, no matter what.",
        },
        {
          title: "Jesus Our Superhero",
          id: "zzRBc4ccVIY",
          time: "4:27",
          description:
            "Rocco and Super Moose learn how we can all fight against sickness - just like Jesus - by the power of the Holy Spirit!",
        },
        {
          title: "Space Fruits of the Spirit - Love & Joy",
          id: "2GsHa_COt2o",
          time: "5:47",
          description:
            "Spaceman Rocco is on a mission to collect the space fruits of Love and Joy, but what will happen when he runs into a familiar face in the galaxy?",
        },
        {
          title: "Space Fruits of the Spirit - Peace & Forbearance",
          id: "oVZrkcOLNYE",
          time: "6:21",
          description:
            "Spaceman Rocco is out to snag the space fruits of Peace and Forbearance, but the galaxy of Niv is a tricky one. To succeed, Spaceman Rocco must rely on what he's learned from his space Bible!",
        },
        {
          title: "Fearfully & Wonderfully Made - Dance Challenge",
          id: "mRHgAI5MjVw",
          time: "4:29",
          description:
            "God made us each fearfully and wonderfully - how incredible is that?! Sierra challenges Rocco and friends to a dance party to celebrate how amazing God is for making us.",
        },
        {
          title: "Jesus' Stories - Jesus Our Foundation",
          id: "-WhY78SuZ60",
          time: "3:53",
          description:
            "Mike tells Sierra and Rocco all about his favourite story from Jesus - the parable of the wise and foolish builders.",
        },
      ],
    },
  };
};

Vue.use(Vuex);

export default new Vuex.Store({
  state: defaultState(),
  mutations: mutations,
  getters: getters,
  actions: actions,
});
