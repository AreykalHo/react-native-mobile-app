import React from "react";
import { ScrollView } from "react-native";

import MemoryDetailCardComponent from "../components/MemoryDetailCardComponent";

export default function MemoryDetailScreen() {
  return (
    <ScrollView>
      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        date={"04/03/2024"}
        title={"An Audi R8"}
        description={
          "The Audi R8 is a mid-engine supercar that combines breathtaking performance with everyday usability. It debuted in 2007 and has since become a symbol of cutting-edge technology and sophisticated design."
        }
      ></MemoryDetailCardComponent>

      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        date={"01/03/2024"}
        title={"LandScape Photography During Sunset"}
        description={`Sunsets hold a certain magic, a time when the sky transforms into a canvas of fiery hues and the landscape is bathed in a warm, golden glow. It's no wonder that sunsets are a popular subject for landscape photography, offering photographers a unique opportunity to capture the beauty and drama of the natural world.`}
      />

      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        date={"01/03/2024"}
        title={"Light Bulb"}
        description={
          "The light bulb, a seemingly ordinary object, has revolutionized our lives in countless ways. From banishing the darkness to enabling extended work hours and nighttime activities, this invention has had a profound impact on society."
        }
      />
      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        date={"04/03/2024"}
        title={"Steel Wool Photography"}
        description={
          "Steel wool photography is a unique and captivating art form that utilizes burning steel wool to create ethereal and dynamic light trails in photographs. While seemingly simple, this technique requires specific equipment, safety precautions, and an understanding of camera settings to achieve stunning results."
        }
      />
      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/1435075/pexels-photo-1435075.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        date={"04/03/2024"}
        title={"Fisherman at Sea"}
        description={
          "The sun dipped below the horizon, painting the vast ocean in a fiery palette of orange, red, and purple. Silhouetted against this breathtaking backdrop stood Aiko, a weathered fisherman, his small boat bobbing gently on the waves. His face, etched with the lines of countless sunrises and sunsets spent at sea, was a stoic mask of concentration as he cast his line once more."
        }
      />
      <MemoryDetailCardComponent
        imageSource={
          "https://images.pexels.com/photos/1645668/pexels-photo-1645668.jpeg?auto=compress&cs=tinysrgb&w=600"
        }
        date={"04/03/2024"}
        title={"Crystal Ball"}
        description={
          "The crystal ball sat nestled on crimson velvet, its surface reflecting the flickering candlelight in a mesmerizing dance of light and shadow. Its perfect sphere held within it a swirling mist, ever-shifting, ever-opaque. Legends whispered of its ability to pierce the veil of time, to reveal glimpses of the past, present, and future."
        }
      />
    </ScrollView>
  );
}
