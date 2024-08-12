import React from "react";
const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location:
        "6, 18, Bellandur Gate Rd, Bellandur, Bengaluru, Karnataka 560103",
      openPositions: 10,
      image: "/visa.jpeg",
    },
    {
      id: 2,
      title: "Hewlett Packard Enterprise (HPE)",
      location:
        "Konappana Agrahara, Electronic City, Bengaluru, Karnataka 560100",
      openPositions: 17,
    },
    {
      id: 3,
      title: "Zscaler",
      location:
        "#8/2, 3rd Floor, Bren Optimus Dr. M.H, Marigowda Rd, Dairy Colony, Adugodi, Bengaluru, Karnataka 560029",
      openPositions: 30,
    },
    {
      id: 4,
      title: "Visa Inc Technology Center",
      location:
        "AQUAMARINE BUILDING, Laxmi Sagar Layout, Mahadevapura, Bengaluru, Karnataka 560048",
      openPositions: 15,
    },
  ];

  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
