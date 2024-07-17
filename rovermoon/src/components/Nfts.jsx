import React,{useState} from 'react'
import Nftitem from './Nftitem'
import newnewtarget from "./newnewtarget.jpg"
export default function Nfts() {

        const articles = [
          {
          "imgsrc":"https://boredapeyachtclub.com/_next/image?url=%2Fimages%2Ftransitions%2Fbayc%2F2.webp&w=1200&q=75",
            "title": "Internship Cerificate",
            "recipient": "Hemamalini",
            "description": "Issued in Bangalore",
            "url": "https://www.cnn.com/2024/07/06/weather/hurricane-beryl-south-texas-coast-weekend-sunday-monday/index.html",
          },
          {
            "imgsrc":"https://i.seadn.io/gae/hs3MjnLl_q0lk-lfvB453APzJ3eekF4zePr_EHwksYwFivMvFKm8q_tnjRKZhrEJc7ekV8UiWAiqxeMEE0xiR-P2Mm1UzSjiz8Hrzg?auto=format&dpr=1&w=1000",
            "title": "BTech Degree",
            "recipient": "Ishija Priyansha",
            "description": "Awarded at Dayananda Sagar College of Engineering",
            "url": "https://www.euractiv.com/section/global-europe/news/putin-tells-orban-ukraine-must-capitulate-if-it-wants-peace/"
            },
            {
              "imgsrc":"https://i.seadn.io/gae/G9eAaf94L2z5IvUCOK0GiNqAtJUg1E1H4g1OVdCwzWjLyaePBHjjaqanrNZIr64LGjeJe6PSyvnvhkDSrdlB4js7NzBG_5fCxCcF?auto=format&dpr=1&w=1000",
                "title": "Employment Certificate",
                "recipient": "Daksh K",
                "description": "Serving DevCorpo since 2017!",
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
