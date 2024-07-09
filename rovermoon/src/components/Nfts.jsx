import React,{useState} from 'react'
import Nftitem from './Nftitem'
import newnewtarget from "./newnewtarget.jpg"
export default function Nfts() {

        const articles = [
          {
          "imgsrc":"https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
            "title": "10th Marksheet",
            "recipient": "Hemamalini",
            "description": "Awarded on annual day",
            "url": "https://www.cnn.com/2024/07/06/weather/hurricane-beryl-south-texas-coast-weekend-sunday-monday/index.html",
          },
          {
            "imgsrc":"https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
            "title": "12th Marksheet",
            "recipient": "Ishija Priyansha",
            "description": "Awarded in 2021",
            "url": "https://www.euractiv.com/section/global-europe/news/putin-tells-orban-ukraine-must-capitulate-if-it-wants-peace/"
            },
            {
              "imgsrc":"https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
                "title": "Extra Curricular Certificate",
                "recipient": "Daksh K",
                "description": "Awarded for Excellent performance!",
                "url": "https://www.espn.com/mlb/story/_/id/40503911/pirates-tie-club-record-7-home-runs-rout-mets"
                },
                       {
                "imgsrc": "https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
            "title": "12th Passing certificate",
            "recipient": "Dalia Faheid",
            "description": "Tropical Storm Beryl will strengthen as it tracks toward the Texas-Mexico border this weekend, bringing a risk of damaging winds, life-threatening storm surge and dangerous flooding to Texas beginning late Sunday. It will mark the first US landfall storm of t…",
            "url": "https://www.cnn.com/2024/07/06/weather/hurricane-beryl-south-texas-coast-weekend-sunday-monday/index.html",
          },
          {
            "imgsrc": "https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
            "title": "Income Tax Certificate",
            "recipient": "Ishija Priyansha",
            "description": "Russian President Vladimir Putin told Viktor Orbán on Friday that Ukraine must effectively capitulate if it w",
            "url": "https://www.euractiv.com/section/global-europe/news/putin-tells-orban-ukraine-must-capitulate-if-it-wants-peace/"
            },
            {
                "imgsrc": "https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
                "title": "Job report",
                "recipient": "Ilina Priyansha",
                "description": "The Pirates tied a franchise record by smashing seven home runs in a 14-2 demolition of the Mets on Friday night -- so many that the team said it ran out of fireworks.",
                "url": "https://www.espn.com/mlb/story/_/id/40503911/pirates-tie-club-record-7-home-runs-rout-mets"
                },
                {
                    "imgsrc": "https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
                    "title": "Putin tells Orbán Ukraine must capitulate if it wants peace - EURACTIV",
                    "recipient": "Ishija Priyansha",
                    "description": "Russian President Vladimir Putin told Viktor Orbán on Friday that Ukraine must effectively capitulate if it w",
                    "url": "https://www.euractiv.com/section/global-europe/news/putin-tells-orban-ukraine-must-capitulate-if-it-wants-peace/"
                    },
                    {
                        "imgsrc":"https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
                        "title": "Pirates tie club record with 7 home runs in 14-2 rout of Mets - ESPN",
                        "recipient": "Ilina Priyansha",
                        "description": "The Pirates tied a franchise record by smashing seven home runs in a 14-2 demolition of the Mets on Friday night -- so many that the team said it ran out of fireworks.",
                        "url": "https://www.espn.com/mlb/story/_/id/40503911/pirates-tie-club-record-7-home-runs-rout-mets"
                        }

        ];

        const [state] = useState({
            articles: articles
          });

  return (
<>
<div className=' h-screen w-100  '>
    <img src={newnewtarget} alt="test" srcset="" />
    <img src={newnewtarget} alt="test" srcset="" />
    <img src={newnewtarget} alt="test" srcset="" />
   </div>
    <div className='bgimagediv h-fit w-screen absolute top-0 z-10 backdrop-blur '>
  
       
    <div className='container'>
     <div className="row">
        {state.articles.map((element=>{ return <div className="col-md-4">
        <Nftitem imgsrc={element.imgsrc} title={element.title} recipient={element.recipient} description={element.description} url={element.url}/></div>
      }))}
      </div>
     
    </div>
    </div>
    
    </>
  )
}
