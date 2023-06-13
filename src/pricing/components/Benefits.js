export default function Benefits() {
  const benefits = [
    {
      title: "One low price",
      subtitle:
        "Save big. Get everything with a super low monthly subscription.",
    },
    {
      title: "No limits",
      subtitle: "Get complete access to everything on the site",
    },
    {
      title: "Cancel anytime",
      subtitle: "Pause or stop your subscription",
    },
  ];
  return (
    <div className="bg-white">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map((benifit , index) => (
            <div key={index} className="spacing-base">
              <h3 className="font-extrabold text-4xl">
                {benifit.title }
                <br />
              </h3>
              <div className="">
                {benifit.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
