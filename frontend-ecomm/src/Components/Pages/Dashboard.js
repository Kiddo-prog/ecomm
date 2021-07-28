import React from 'react';
import Box from '@material-ui/core/Box';
import Login from './Registration/Login';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LockIcon from '@material-ui/icons/Lock';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Dashboard() {
    return (
        <div>
            <Box component="div">
                <Router>
                <div className="DASHBORD_APP">
                    <div className="LOGO">
                        <Link to="/">
                            E-COMM
                        </Link>
                    </div>
                <nav className='LINKS'>
                    <ul>
                        <li>
                            <Link to="/">
                                home
                            </Link>
                        </li>

                        <li>
                            <span>
                                <LockIcon />
                            </span>
                            <Link to="/login">
                                login
                            </Link>
                        </li>

                        <li>
                        <span>
                            <ShoppingCartIcon />
                        </span>
                            <Link to="/cart">
                                cart
                            </Link>
                        </li>

                            {/* Condition statement */}

                            {/* <Link to='/logout'>
                                <Logout />
                            </Link> */}
                    </ul>
                </nav>

                <Switch>
                    {/* Home path */}
                    <Route path='/'>
                            
                    </Route>

                    {/* Login Path */}
                    <Route path='/login'>
                        <Login />
                    </Route>

                    {/* Cart path */}
                    <Route path='/cart'>
                        
                    </Route>
                </Switch>
            </div>
                </Router>
            </Box>
        </div>
    )
}
