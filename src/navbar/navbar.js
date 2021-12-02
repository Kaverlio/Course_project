import React, { useState } from 'react';
import Login from '../login/login';

export default function Navbar()  {
       return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="./home">TimeKiller</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" href="./book">Books<span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./film">Films</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./game">Games</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./profile">Profile</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        <div class="ml-2 btn-sm">
                            <Login />
                        </div>
                    </form>
                </div>

            </nav>
        )
    }
