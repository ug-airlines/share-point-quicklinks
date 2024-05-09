import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { IReadonlyTheme } from '@microsoft/sp-component-base';



import * as strings from 'SrcQuicklinksWebPartStrings';

export interface ISrcQuicklinksWebPartProps {
  description: string;
}

export default class SrcQuicklinksWebPart extends BaseClientSideWebPart<ISrcQuicklinksWebPartProps> {
  public render(): void {
    this.domElement.innerHTML = `
    <div style="font-size: 20px;font-weight: 600;">Business Applications</div></br>

      <div>

        <style>
            * {
              box-sizing: border-box;
              height
            }
            .flex-container {
              display: flex;
              flex-wrap: wrap;
              text-align: left;
              box-sizing: border-box;
              width: auto;
              border-radius:4px;
              outline: 0px;
              position: relative;

              user-select: text;
            }
            .flex-text {
              padding-top: 10px;
              padding-left: 12px;
            }
            .srcQuicklinks{
              overflow-y: scroll;
              overflow-x: hidden;
              color: "[theme:bodyText, default: #323130]";
              height:450px;
              width: 100%;
            }
        </style>
        <div class="srcQuicklinks">

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/adt-wings-logo.png" alt="Home"></div>
            <div class="flex-text"><a href="http://185.85.189.98:8080/Wings/login.jsp" target="_blank">ADT Wings</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/airbus-a-logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://w3.airbus.com/newairbusworld/faces/Home?_adf.ctrl-state=coofimf1p_1&_afrLoop=8941024195677128&_afrWindowMode=0&_afrWindowId=null#%21%40%40?_afrWindowId%3Dnull%26_afrLoop%3D8941024195677128%26_afrWindowMode%3D0%26_adf.ctrl-state%3Dcoofimf1p_5" target="_blank">Airbus World</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/alcatel-logo.jpg" alt="Home"></div>
            <div class="flex-text"><a href="http://192.168.3.10/ConVoxCCS/index.php" target="_blank">Alcatel PBX & Contact Center System</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/Amadeus_Logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://data-exchange.amadeus.com/sfiler/Tree.action?CSRFToken=fp12dq0kq9h6ospttr8086tmgp" target="_blank">Amadeus Data Exchange Portal</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/Amadeus_Logo.png" alt="Home"></div>
            <div class="flex-text"><a href="http://172.24.84.117:61080/StandardCraneUser/CraneDesktop/Login.jsp" target="_blank">Amadeus Loyalty Management</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/Amadeus_Logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://pdt.accounts.amadeus.com/LoginService/authorizeAngular?service=ARD_UR&client_id=1ASIXARD&LANGUAGE=GB&redirect_uri=https://uat3.resdesktop.altea.amadeus.com/app_ard/apf/init/login?SITE%3DAURBAURB%26LANGUAGE%3DGB%26MARKETS%3DARDW_PDT_WBP%26ACTION%3DclpLogin" target="_blank">Amadeus Reservation Desktop</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/Amadeus_Logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://revenue-integrity.app.amadeus.com/home" target="_blank">Amadeus Revenue Integrity</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/Amadeus_Logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://servicehub.amadeus.com/" target="_blank">Amadeus Service Hub</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/dpo-bird-logo.jpeg" alt="Home"></div>
            <div class="flex-text"><a href="https://portal.dpopay.com/system/loginpage.asp?loginpage=provider" target="_blank">DPO Direct Pay</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/radar-24.png" alt="Home"></div>
            <div class="flex-text"><a href="https://www.flightradar24.com/" target="_blank">Flight Radar 24 - Business plan</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/flyht.png" alt="Home"></div>
            <div class="flex-text"><a href="https://www.flyhtcontrol.com/" target="_blank">FlyHT</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/fly-smart-logo-2.png" alt="Home"></div>
            <div class="flex-text"><a href="https://192.168.1.18:8443/fsa-gateway/" target="_blank">Flysmart+ AODB Database</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/fly-smart-logo-2.png" alt="Home"></div>
            <div class="flex-text"><a href="https://192.168.1.18:8443/fsa-gateway/" target="_blank">Flysmart+ EFB Performance load manangement </a></div>
          </div></br>

          <div class="flex-container"> 
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/fly-smart-logo-2.png" alt="Home"></div>
            <div class="flex-text"><a href="https://192.168.1.18:8443/fsa-gateway/" target="_blank">Flysmart+ Gateway Management Service</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/hello.png" alt="Home"></div>
            <div class="flex-text"><a href="https://www.hellosign.com/" target="_blank">HelloSign</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/bombardier.png" alt="Home"></div>
            <div class="flex-text"><a href="https://mhirj-prd-portal-28f3ikqw.workzone.cfapps.us10.hana.ondemand.com/site#Shell-home?sap-app-origin-hint=" target="_blank">iFly Bombardier/ Interactive Electronic Technical Publications (IETP)</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/jamf-og-image.jpg" alt="Home"></div>
            <div class="flex-text"><a href="https://ugandairlinesefb.jamfcloud.com/" target="_blank">Jamf PRO X</a></div>
          </div></br>


          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/jeppesen-logo.jpg" alt="Home"></div>
            <div class="flex-text"><a href="https://s2.jetplan.com/" target="_blank">Jeppesen JetPlanner</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/LeaveIcon.png" alt="Home"></div>
            <div class="flex-text"><a href="https://erp.ugandairlines.com/" target="_blank">Leave portal</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/azure-logo.jpeg" alt="Home"></div>
            <div class="flex-text"><a href="https://portal.azure.com/" target="_blank">Microsoft Azure Portal</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/D365.png" alt="Home"></div>
            <div class="flex-text"><a href="http://unacl.southafricanorth.cloudapp.azure.com/BC150/Default" target="_blank">Microsoft Dynamics</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/microsoft-365-logo.png" alt="Home"></div>
            <div class="flex-text"><a href="https://admin.microsoft.com/AdminPortal/Home#/homepage" target="_blank">Microsoft 365 Office suite</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/oracle.png" alt="Home"></div>
            <div class="flex-text"><a href="https://erp.ugandairlines.com/" target="_blank">Oracle Fusion ERP Cloud </a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/qpulse.png" alt="Home"></div>
            <div class="flex-text"><a href="https://qpulse.ugandairlines.com/" target="_blank">Qpulse</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/sophos.jpeg" alt="Home"></div>
            <div class="flex-text"><a href="https://192.168.1.1:4444/" target="_blank">SOPHOS Firewall</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/sita-logo.gif" alt="Home"></div>
            <div class="flex-text"><a href="https://europe.dw.aticloud.aero/vpn/index.html" target="_blank">SITA AIRCOM Cockpit Services</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/sita-logo.gif" alt="Home"></div>
            <div class="flex-text"><a href="https://my.aircraft-sita.aero/ui/cabin/fleet?displayFleetMode=2" target="_blank">SITA MyFleet</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/sita-logo.gif" alt="Home"></div>
            <div class="flex-text"><a href="https://europe.dw.aticloud.aero/vpn/index.html" target="_blank">SITA AIRCOM Server Solutions</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"><img style="width: 22px; height: 22px;"src="https://ugandairlinesug.sharepoint.com/BusinessAppLogos/tenders.png" alt="Home"></div>
            <div class="flex-text"><a href="https://ugandairlines.com/tenders" target="_blank">Tenders</a></div>
          </div></br>

          <div class="flex-container">
            <div class="flex-text"></div>
            <div class="flex-text">
            <a href="https://fta.ugandairlines.com" target="_blank">
              Flight Turn Around
            </a>
            </div>

          <div class="flex-container">
            <div class="flex-text"></div>
            <div class="flex-text">
            <a href="https://rosters.ugandairlines.com/CREWPORTAL/" target="_blank">
              ARMS Crew Web Portal
            </a>
            </div>
          </div></br>

        </div>

      </div>`;

  }

  protected onInit(): Promise<void> {

    return this._getEnvironmentMessage().then(message => {

    });
  }



  private _getEnvironmentMessage(): Promise<string> {
    if (!!this.context.sdks.microsoftTeams) { // running in Teams, office.com or Outlook
      return this.context.sdks.microsoftTeams.teamsJs.app.getContext()
        .then(context => {
          let environmentMessage: string = '';
          switch (context.app.host.name) {
            case 'Office': // running in Office
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOffice : strings.AppOfficeEnvironment;
              break;
            case 'Outlook': // running in Outlook
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentOutlook : strings.AppOutlookEnvironment;
              break;
            case 'Teams': // running in Teams
              environmentMessage = this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentTeams : strings.AppTeamsTabEnvironment;
              break;
            default:
              throw new Error('Unknown host');
          }

          return environmentMessage;
        });
    }

    return Promise.resolve(this.context.isServedFromLocalhost ? strings.AppLocalEnvironmentSharePoint : strings.AppSharePointEnvironment);
  }

  protected onThemeChanged(currentTheme: IReadonlyTheme | undefined): void {
    if (!currentTheme) {
      return;
    }


    const {
      semanticColors
    } = currentTheme;

    if (semanticColors) {
      this.domElement.style.setProperty('--bodyText', semanticColors.bodyText || null);
      this.domElement.style.setProperty('--link', semanticColors.link || null);
      this.domElement.style.setProperty('--linkHovered', semanticColors.linkHovered || null);
    }

  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
