import React from 'react';


function Contact (props) {
return (
    <div class="container">
    <div class="row">
        <h3>Developer Question</h3>
        <p>Can anyone tell me why this snippet flashes after the tooltip is removed from the DOM? It is driving me crazy!</p>
        <hr/>
        <h3>Developer Answer</h3>
        <p>It appears that tooltips do not like to be removed from within an <code>iframe</code> and cause the page to <em><strong>flash</strong></em>. If you are experiencing this issue with the tooltips please <a id="fullscreen" href="#fullscreen">click here</a> to view this snippet in an iframe.</p>
    </div>



    <div class="row">
        <div class="col-xs-12 col-sm-offset-3 col-sm-6">
            <div class="panel panel-default">
                <div class="panel-heading c-list">
                    <span class="title">Contacts</span>

                </div>


                <ul class="list-group" id="contact-list">
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/men/49.jpg" alt="Scott Stevens" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Scott Stevens</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5842 Hillcrest Rd"></span>
                            <span class="visible-xs"> <span class="text-muted">5842 Hillcrest Rd</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(870) 288-4149"></span>
                            <span class="visible-xs"> <span class="text-muted">(870) 288-4149</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="scott.stevens@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">scott.stevens@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/men/97.jpg" alt="Seth Frazier" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Seth Frazier</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="7396 E North St"></span>
                            <span class="visible-xs"> <span class="text-muted">7396 E North St</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(560) 180-4143"></span>
                            <span class="visible-xs"> <span class="text-muted">(560) 180-4143</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="seth.frazier@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">seth.frazier@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/women/90.jpg" alt="Jean Myers" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Jean Myers</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="4949 W Dallas St"></span>
                            <span class="visible-xs"> <span class="text-muted">4949 W Dallas St</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(477) 792-2822"></span>
                            <span class="visible-xs"> <span class="text-muted">(477) 792-2822</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="jean.myers@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">jean.myers@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/men/24.jpg" alt="Todd Shelton" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Todd Shelton</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5133 Pecan Acres Ln"></span>
                            <span class="visible-xs"> <span class="text-muted">5133 Pecan Acres Ln</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(522) 991-3367"></span>
                            <span class="visible-xs"> <span class="text-muted">(522) 991-3367</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="todd.shelton@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">todd.shelton@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/women/34.jpg" alt="Rosemary Porter" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Rosemary Porter</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5267 Cackson St"></span>
                            <span class="visible-xs"> <span class="text-muted">5267 Cackson St</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(497) 160-9776"></span>
                            <span class="visible-xs"> <span class="text-muted">(497) 160-9776</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="rosemary.porter@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">rosemary.porter@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/women/56.jpg" alt="Debbie Schmidt" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Debbie Schmidt</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="3903 W Alexander Rd"></span>
                            <span class="visible-xs"> <span class="text-muted">3903 W Alexander Rd</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(867) 322-1852"></span>
                            <span class="visible-xs"> <span class="text-muted">(867) 322-1852</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="debbie.schmidt@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">debbie.schmidt@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                    <li class="list-group-item">
                        <div class="col-xs-12 col-sm-3">
                            <img src="http://api.randomuser.me/portraits/women/76.jpg" alt="Glenda Patterson" class="img-responsive img-circle" />
                        </div>
                        <div class="col-xs-12 col-sm-9">
                            <span class="name">Glenda Patterson</span><br/>
                            <span class="glyphicon glyphicon-map-marker text-muted c-info" data-toggle="tooltip" title="5020 Poplar Dr"></span>
                            <span class="visible-xs"> <span class="text-muted">5020 Poplar Dr</span><br/></span>
                            <span class="glyphicon glyphicon-earphone text-muted c-info" data-toggle="tooltip" title="(538) 718-7548"></span>
                            <span class="visible-xs"> <span class="text-muted">(538) 718-7548</span><br/></span>
                            <span class="fa fa-comments text-muted c-info" data-toggle="tooltip" title="glenda.patterson@example.com"></span>
                            <span class="visible-xs"> <span class="text-muted">glenda.patterson@example.com</span><br/></span>
                        </div>
                        <div class="clearfix"></div>
                    </li>
                </ul>
            </div>
        </div>
	</div>

    <div id="cant-do-all-the-work-for-you" class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
                    <h4 class="modal-title" id="mySmallModalLabel">Ooops!!!</h4>
                </div>
                <div class="modal-body">
                    <p>I am being lazy and do not want to program an "Add User" section into this snippet... So it looks like you'll have to do that for yourself.</p><br/>
                    <p><strong>Sorry<br/>
                    ~ Mouse0270</strong></p>
                </div>
            </div>
        </div>
    </div>
    </div>
    );

}

export default Contact ;