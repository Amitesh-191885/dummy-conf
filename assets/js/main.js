/*
 * Change Navbar color while scrolling
*/

$(window).scroll(function(){
	handleTopNavAnimation();
});

$(window).load(function(){
	handleTopNavAnimation();
});

function handleTopNavAnimation() {
	var top=$(window).scrollTop();

	if(top>10){
		$('#site-nav').addClass('navbar-solid'); 
	}
	else{
		$('#site-nav').removeClass('navbar-solid'); 
	}
}

/*
 * Registration Form
*/

$('#registration-form').submit(function(e){
    e.preventDefault();
    
    var postForm = { //Fetch form data
            'fname'     : $('#registration-form #fname').val(),
            'lname'     : $('#registration-form #lname').val(),
            'email'     : $('#registration-form #email').val(),
            'cell'      : $('#registration-form #cell').val(),
            'address'   : $('#registration-form #address').val(),
            'zip'       : $('#registration-form #zip').val(),
            'city'      : $('#registration-form #city').val(),
            'program'   : $('#registration-form #program').val()
    };

    $.ajax({
            type      : 'POST',
            url       : './assets/php/contact.php',
            data      : postForm,
            dataType  : 'json',
            success   : function(data) {
                            if (data.success) {
                                $('#registration-msg .alert').html("Registration Successful");
                                $('#registration-msg .alert').removeClass("alert-danger");
                                $('#registration-msg .alert').addClass("alert-success");
                                $('#registration-msg').show();
                            }
                            else
                            {
                                $('#registration-msg .alert').html("Registration Failed");
                                $('#registration-msg .alert').removeClass("alert-success");
                                $('#registration-msg .alert').addClass("alert-danger");
                                $('#registration-msg').show();
                            }
                        }
        });
});

/*
 * SmoothScroll
*/

smoothScroll.init();


/* filter */
let topics = {
    "FUTURE ENERGY SYSTEMS AND TECHNOLOGIES": [
        " Algorithms for Smart Energy Management and Analytics",
        " Smart Grid Technologies and Infrastructures",
        " Sensor Networks for Smart Grids",
        " Industrial Applications of Smart Energy Systems",
        " Home Automation Technologies",
        " Safety and Security",
        " Smart Devices & Metering",
        " IoT Applications in Grid",
        " Reliability and Maintenance",
        " Grid Integration of distributed energy sources",
        " Power quality event detection, classification and mitigation with signal processing techniques",
        " Control of shunt, series and active filters"
    ],
    "Sustainable Energy Systems": [
        "New Trends and Technologies for Renewable Energy Sources (RES)",
        "Control Techniques for Renewable Energy Systems",
        "Control Techniques for RES",
        "RES for Electrical Vehicles and Components",
        "Hybrid RES",
        "Renewable Energy Research and Applications for Industries",
        "Policies in Renewable Energy Integration",
        "Advanced Green Energy Technologies",
        "Energy Efficient Designs and Standards",
        "Green Energy in Transport & Sustainable Cities",
        "Rural Development through Green Energy"
    ],
    "Distributed Energy Systems": [
        "Electrical Power quality",
        "Active and reactive Power Management",
        "Control and energy management system",
        "Distributed energy and Microgrid systems",
        "DC & AC Microgrids",
        "Microgrid energy management",
        "Power Generation and Distribution",
        "Energy Storage Systems and Applications"
    ],
    "Power Electronics and Drive System": [
        "Power converter topologies: Modelling, Analysis and Control",
        "Power Semiconductor Devices and their applications",
        "Control techniques in Power Electronics",
        "Simulation of Power Electronics",
        "Electric Drives and their control",
        "Electric Drives for Renewable and Transportation",
        "Thermal Management, Packaging, and Optimization.",
        "Fault Diagnosis, Condition monitoring, and Reliability of Electric Drives.",
        "Electrical Vehicle and related areas",
        "FACTS, PFC, STATCOM",
        "Harmonic analysis and compensations"
    ],
    "Instrumentation & Control": [
        "Advances in Theoretical Aspects of Measurement, Instrumentation, Control and Automation(MICA)",
        "Adaptive, Robust, Distributed, Intelligent, and Digital control",
        "Process Control and Automation",
        "Estimation, Modelling and Identification",
        "Novel Instrumentation for Process Measurement",
        "Optimization and optimal control",
        "Artificial Intelligent and Expert System",
        "Fuzzy Logic and Neural Network",
        "Recent developments in automation and control"
    ]
}


