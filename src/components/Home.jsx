import React from 'react';

const Home = () => (
    <div className="row mt-5">
        <div className="col-md-12">
            <h1>Welcome to Formik</h1>
            <hr/>
            <div className="jumbotron"></div>
        </div>
            <div className="col-md-4">
                <h4>Declarative</h4>
                <p>Formik takes care of the repetitive and annoying stuff--keeping track of values/errors/visited fields, orchestrating validation, and handling submission--so you don't have to. This means you spend less time wiring up state and change handlers and more time focusing on your business logic.</p>
            </div>
            <div className="col-md-4">
             <h4>Intuitive</h4>
            <p>No fancy subscriptions or observables under the hood, just plain React state and props. By staying within the core React framework and away from magic, Formik makes debugging, testing, and reasoning about your forms a breeze. If you know React, and you know a bit about forms, you know Formik!</p>
            </div>
            <div className="col-md-4">
            <h4>Adoptable</h4>
            <p>Since form state is inherently local and ephemeral, Formik does not use external state management libraries like Redux or MobX. This also makes Formik easy to adopt incrementally and keeps bundle size to a minimum.</p>
            </div>
        </div>
)

export default Home;