import React from 'react';

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="side-menu">

                <div className="navbar navbar-default" role="navigation">
                    <div className="navbar-header">
                        <div className="brand-wrapper">
                            <button type="button" className="navbar-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>

                            <div className="brand-name-wrapper">
                                <a className="navbar-brand" href="/">
                                    Brand
                                </a>
                            </div>

                            <a data-toggle="collapse" href="#search" className="btn btn-default" id="search-trigger">
                                <span className="glyphicon glyphicon-search"></span>
                            </a>


                            <div id="search" className="panel-collapse collapse">
                                <div className="panel-body">
                                    <form className="navbar-form" role="search">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Search" />
                                        </div>
                                        <button type="submit" className="btn btn-default "><span className="glyphicon glyphicon-ok"></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="side-menu-container">
                        <ul className="nav navbar-nav">

                            <li><a href="/home"><span className="glyphicon glyphicon-home"></span> Home</a></li>
                            <li><a href="/product"><span className="glyphicon glyphicon-inbox"></span> Products</a></li>
                            <li><a href="/settings"><span className="glyphicon glyphicon-wrench"></span> Settings</a></li>

                            {
                                // <li className="panel panel-default" id="dropdown">
                                //     <a data-toggle="collapse" href="#dropdown-lvl1">
                                //         <span className="glyphicon glyphicon-user"></span> Sub Level <span className="caret"></span>
                                //     </a>

                                //     <div id="dropdown-lvl1" className="panel-collapse collapse">
                                //         <div className="panel-body">
                                //             <ul className="nav navbar-nav">
                                //                 <li><a href="/">Link</a></li>
                                //                 <li><a href="/">Link</a></li>
                                //                 <li><a href="/">Link</a></li>

                                //                 <li className="panel panel-default" id="dropdown">
                                //                     <a data-toggle="collapse" href="#dropdown-lvl2">
                                //                         <span className="glyphicon glyphicon-off"></span> Sub Level <span className="caret"></span>
                                //                     </a>
                                //                     <div id="dropdown-lvl2" className="panel-collapse collapse">
                                //                         <div className="panel-body">
                                //                             <ul className="nav navbar-nav">
                                //                                 <li><a href="/">Link</a></li>
                                //                                 <li><a href="/">Link</a></li>
                                //                                 <li><a href="/">Link</a></li>
                                //                             </ul>
                                //                         </div>
                                //                     </div>
                                //                 </li>
                                //             </ul>
                                //         </div>
                                //     </div>
                                // </li>
                            }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }
}