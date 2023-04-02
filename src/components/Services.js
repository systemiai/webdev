import Card from "./Card";
function Services() {
    return (
        <div className="container services">
        <div>
            <h2 className="main-title text-left">SERVICES</h2>
        </div>
         {/*add Approach Model, Business Model research, and Our Work sections*/}
        
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                    <Card title="AI Project related Research" img="card1.png" text="Add text " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Data Analysis" img="card2.png" text="Add text." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="IoT" img="card3.png" text="add text" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Medical & Wearable Technologies" img="card3.png" text="add text" />
                    </div>
                </div>
            </div>
        </div>
        
    </div>
      );
}
export default Services;

