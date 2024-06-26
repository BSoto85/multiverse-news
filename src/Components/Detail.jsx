import axios from "axios";
import WhatIf from "./WhatIf";
import { useEffect, useState } from "react";

const searchURL = import.meta.env.VITE_BASE_SEARCH_URL;

const Detail = ({ title }) => {
  const [article, setArticle] = useState({});
  const [error, setError] = useState("");

  const hardcodedArticle = {
    title: `Fighting in Ukraine May Complicate U.S. Thaw With Russia
  `,
    text: `MOSCOW — The war in eastern Ukraine that simmered quietly for months has erupted in a lethal bout of fighting in recent days. The violence, which killed at least eight Ukrainian soldiers and three on the pro-Russian side, shifted the front lines by only a few hundred yards in several spots, but potentially complicates American efforts to improve relations with Russia. The United States Army helps to train and equip Ukrainian soldiers, who are fighting Russian-backed separatists in two eastern provinces of Ukraine, in the only active war in Europe today. In the latest outbreak, the sides vied for control of what are known as “gray zone” territories, areas between the front lines that had previously been in buffer zones. The Ukrainian Army advanced in at least two places, according to news reports and official Ukrainian accounts, but it said it did so to rebuff rebel attacks. Each side blamed the other for the escalation. Referring to one front-line town, an adviser to the Ukrainian Interior Ministry, Yuri Kasyanov, told Radio Free Europe on Tuesday, “The defenders of Avdiivka preferred to advance the line” to a more defensible position. Ukraine’s Foreign Affairs Ministry issued a statement appealing to Western governments to intervene diplomatically. “For the last two days, the Russian occupation forces carried out massive attacks across the line,” firing with rocket artillery, heavy mortars and other long-range weapons, the statement said. European monitors reported heavy shelling of Avdiivka since Sunday. Journalists who visited the town reported evidence of a psychological warfare operation of a sophistication that suggested Russian involvement. Cellphones in the town received text messages addressed to Ukrainian soldiers, who often carry phones, saying, “You are just meat to your commanders.” The shelling disrupted electrical and water supplies. The Ukrainian authorities set up heated shelters for residents whose homes had been damaged, as nighttime temperatures dropped to minus 18 degrees Fahrenheit (minus 28 Celsius). “Given harsh weather conditions and the continuing shelling by the militants, the humanitarian situation in the area continues to deteriorate,” the Foreign Affairs Ministry’s statement said. The authorities said they were preparing to evacuate the town’s 16,000 residents. The rebel governments of the Luhansk and Donetsk People’s Republics, which are not recognized internationally, issued a joint statement addressed to President Vladimir V. Putin of Russia and President Trump that also called for a diplomatic solution. The Trump administration’s maneuvering for better relations with Russia has alarmed Ukrainian officials, who fear that Western pressure could ease on Russia to withdraw its unacknowledged military forces in eastern Ukraine. But Ukraine is not without options in defending itself, including using its army, which showed an ability to fight even before American training began. Since the so-called line of contact was initially negotiated in a cease-fire in September 2014, the Ukrainian Army has in places given ground after separatist attacks. With its recent advance, the army moved back into at least one such area, near Avdiivka, without crossing the original cease-fire line, Mr. Kasyanov, the adviser to the Interior Ministry, said.`,
  };

  // useEffect(() => {
  //   const fetchWorldNews = async () => {
  //     const url = `${searchURL}?text=${title}&language=en`;
  //     const apiKey = import.meta.env.VITE_SEARCH_API_KEY;

  //     try {
  //       const response = await axios.get(url, {
  //         headers: {
  //           "x-api-key": apiKey,
  //         },
  //       });

  //       // setArticle(response.data.news[0]);
  //       console.log(response);
  //       setError(null);
  //     } catch (error) {
  //       console.error("There was a problem with the fetch operation:", error);
  //       setError("Failed to fetch world news. Please try again later.");
  //     }
  //   };
  //   fetchWorldNews();
  // }, []);

  useEffect(() => setArticle(hardcodedArticle), []);
  console.log("WORLD", article);
  console.log("Title", title);

  return (
    <div>
      <WhatIf article={article} />
    </div>
  );
};

export default Detail;
