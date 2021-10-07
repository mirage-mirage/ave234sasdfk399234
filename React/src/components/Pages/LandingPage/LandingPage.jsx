import { lazy, useState } from "react";
import { Suspense } from "react/cjs/react.production.min";
const LoginCard = lazy(() => import("./LoginCard"));
const RegisterCard = lazy(() => import("./RegisterCard"));

const LandingPage = () => {
  const [wantsRegisterCard, setWantsRegisterCard] = useState(false);

  const toggleCardHandler = () => {
    setWantsRegisterCard(!wantsRegisterCard);
  };
  return (
    <div className="container">
      <div className="row justify-content-around mt-5">
        <div className="col-md-5 text-center">
          <img
            className="mb-2"
            src="https://cdn.pngsumo.com/index-of-wp-content-uploads-2016-03-bank-vector-png-550_300.png"
            alt="Bank Image"
            width="100%"
          />
          <p>
            Lorem ipsum dolor sit amet. Sed debitis vitae ut voluptate alias aut
            nisi dolore et laudantium amet. Sed natus totam non animi officia ab
            laudantium aliquam qui quasi exercitationem vel repellendus
            repellendus. Sed aperiam dolores aut facere sunt a odio galisum est
            expedita tempore? Id voluptatum officia aut aliquid dolore sed quia
            quidem et sint doloremque a eligendi ullam non dolores aliquam quia
            delectus. Quo impedit voluptate est velit consectetur et distinctio
            dolores ea quia architecto cum laborum tenetur.
          </p>
        </div>
        <div className="col-md-5  pt-4">
          {wantsRegisterCard ? (
            <Suspense
              fallback={
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              }
            >
              <RegisterCard loginClickHandler={toggleCardHandler} />
            </Suspense>
          ) : (
            <Suspense
              fallback={
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              }
            >
              <LoginCard registerClickHandler={toggleCardHandler} />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
