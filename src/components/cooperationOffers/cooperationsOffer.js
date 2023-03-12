import "./cooperationsOffer.scss"

const CooperationOffers = () => {
  return (
    <div className="cooperation-offers">
      <div className="container">
        <h2>Cooperation Offer</h2>
        <p>QAX company suggests you three main cooperation options</p>

        <div>
            <h3>Fixed Price</h3>
            <div>
                <p>With this approach we define with you a project testing scope, discuss all specifications, testing environments and other details. Then we agree project verification cost and deadline. The option will be more suitable for you, if there is no big amount of objects to test at current project stage.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>You can perform short-term project without involving QA for a full-work day. It will save your money</li>
                    <li>You can smooth test load peaks with our outsource QA. As result there is no need for you to have many QA staff or hire/fire additional QA resources</li>
                </ul>
            </div>
        </div>

        <div>
            <h3>Time & Material</h3>
            <div>
                <p>"Hourly paid” model is the most suitable, when it’s hard or impossible to estimate the project testing scope and terms. Only actual QA spent time will costs with this model. Such services are paid on a monthly basis or after the work is finished in case if the cooperation terms are not more than a month, and you receive comprehensive reports on the progress, as well as statements of the time-consuming.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>You can minimize your product costs, by minimize QA expenses</li>
                    <li>You will not pay for sick, vacation or tea-breaks, only actual working hours should be paid</li>
                </ul>
            </div>
        </div>

        <div>
            <h3>Outstaff </h3>
            <div>
                <p>If you have few projects or / and long terms cooperation plans with our company, then we can provide you a QA team (including QA Team lead , if needed). With this model, we assign QA sources, based on your requirements. In future, you can change number of QA(s), depending of test load.</p>
                <h4>Advantages</h4>
                <ul>
                    <li>This is the easiest way to plan your budget. You just hire the number of QA you will need for your project</li>
                    <li>You will always have a professional QA staff in state, without need to search, interview, train QAs and rent office. Also you can easily reduce or increase number of QA(s) depending of test load on you project. That way you can minimize your product costs </li>
                    <li>A team accumulates knowledge about your products and processes and requires less time expenses</li>
                    <li>TA team can carry out multiple projects simultaneously, you are able to change the priority of tasks, stop tasks and assign new tasks</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CooperationOffers;
