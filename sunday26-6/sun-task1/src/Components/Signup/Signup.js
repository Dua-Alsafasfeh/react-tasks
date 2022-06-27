import React, { Component } from 'react';

class Signup extends Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>

                <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4">Sign up</p>

                    <div class="form-row mb-4">
                        <div class="col">

                            <input type="text" id="defaultRegisterFormFirstName" class="form-control" placeholder="First name"></input>
                        </div>
                        <div class="col">

                            <input type="text" id="defaultRegisterFormLastName" class="form-control" placeholder="Last name"></input>
                        </div>
                    </div>


                    <input type="email" id="defaultRegisterFormEmail" class="form-control mb-4" placeholder="E-mail"></input>

                    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"></input>
                    <small id="defaultRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                        At least 8 characters and 1 digit
                    </small>

                    <input type="text" id="defaultRegisterPhonePassword" class="form-control" placeholder="Phone number" aria-describedby="defaultRegisterFormPhoneHelpBlock"></input>
                    <small id="defaultRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                        Optional - for two step authentication
                    </small>

                    <div class="custom-control custom-checkbox">
                        <input type="checkbox" class="custom-control-input" id="defaultRegisterFormNewsletter"></input>
                        <label class="custom-control-label" for="defaultRegisterFormNewsletter">Subscribe to our newsletter</label>
                    </div>


                    <button class="btn btn-info my-4 btn-block" type="submit">Sign in</button>


                    <p>or sign up with:</p>

                    <a href="#" className="mx-2" role="button"><i className="fab fa-facebook-f light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-twitter light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-linkedin-in light-blue-text"></i></a>
                    <a href="#" className="mx-2" role="button"><i className="fab fa-github light-blue-text"></i></a>
                    <hr></hr>
                    <p>By clicking
                        <em>Sign up</em> you agree to our
                        <a href="" target="_blank">terms of service</a>
                    </p>
                </form>
                <hr></hr>
            </div>
        );
    }
}

export default Signup;