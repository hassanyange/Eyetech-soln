Tsh(document).ready(function(){Tsh("#basic-pills-wizard").bootstrapWizard({tabClass:"nav nav-pills nav-justified"}),Tsh("#progrss-wizard").bootstrapWizard({onTabShow:function(a,i,r){var s=(r+1)/i.find("li").length*100;Tsh("#progrss-wizard").find(".progress-bar").css({width:s+"%"})}})});