import {Switch, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import ProductDetail from "../pages/ProductDetail";
import ContactPage from "../pages/ContactPage";
import AboutPage from "../pages/AboutPage";
import BlogPage from "../pages/BlogPage";
import TeamPage from "../pages/TeamPage";
import SignUp from "../pages/SignUpPage";
import LogIn from "../pages/LoginPage";
import ShoppingCart from "../pages/ShoppingCart";

export default function PageContent() {
    return (
        <div className="page-content">
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route path="/shop">
                    <ShopPage />
                </Route>
                <Route path="/about">
                    <AboutPage />
                </Route>
                <Route path="/contact">
                    <ContactPage />
                </Route>
                <Route path="/blog">
                    <BlogPage />
                </Route>
                <Route path="/product">
                    <ProductDetail />
                </Route>
                <Route path="/team">
                    <TeamPage />
                </Route>
                <Route path="/product:id">
                    <ProductDetail />
                </Route>
                 <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <LogIn />
                </Route>
                <Route path="/cart">
                    <ShoppingCart />
                </Route>
            </Switch>
        </div>
    )
}