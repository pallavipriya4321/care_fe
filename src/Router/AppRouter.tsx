import { useRedirect, useRoutes, navigate, usePath } from "raviger";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { BedCapacityForm } from "../Components/Facility/BedCapacityForm";
import { ConsultationDetails } from "../Components/Facility/ConsultationDetails";
import { ConsultationForm } from "../Components/Facility/ConsultationForm";
import { DoctorCapacityForm } from "../Components/Facility/DoctorCapacityForm";
import { FacilityCreate } from "../Components/Facility/FacilityCreate";
import { FacilityHome } from "../Components/Facility/FacilityHome";
import { HospitalList } from "../Components/Facility/HospitalList";
import { TriageForm } from "../Components/Facility/TriageForm";
import { DailyRounds } from "../Components/Patient/DailyRounds";
import { PatientManager } from "../Components/Patient/ManagePatients";
import PatientNotes from "../Components/Patient/PatientNotes";
import { PatientHome } from "../Components/Patient/PatientHome";
import { PatientRegister } from "../Components/Patient/PatientRegister";
import { SampleDetails } from "../Components/Patient/SampleDetails";
import SampleReport from "../Components/Patient/SamplePreview";
import { SampleTest } from "../Components/Patient/SampleTest";
import SampleViewAdmin from "../Components/Patient/SampleViewAdmin";
import ManageUsers from "../Components/Users/ManageUsers";
import { UserAdd } from "../Components/Users/UserAdd";
import InventoryList from "../Components/Facility/InventoryList";
import InventoryLog from "../Components/Facility/InventoryLog";
import { AddInventoryForm } from "../Components/Facility/AddInventoryForm";
import { SetInventoryForm } from "../Components/Facility/SetInventoryForm";
import MinQuantityList from "../Components/Facility/MinQuantityList";
import { UpdateMinQuantity } from "../Components/Facility/UpdateMinQuantity";
import { ShiftCreate } from "../Components/Patient/ShiftCreate";
import UserProfile from "../Components/Users/UserProfile";
import ShiftBoardView from "../Components/Shifting/BoardView";
import ShiftListView from "../Components/Shifting/ListView";
import ShiftDetails from "../Components/Shifting/ShiftDetails";
import { ShiftDetailsUpdate } from "../Components/Shifting/ShiftDetailsUpdate";
import ResourceCreate from "../Components/Resource/ResourceCreate";
import ResourceBoardView from "../Components/Resource/ResourceBoardView";
import ResourceListView from "../Components/Resource/ListView";
import ResourceDetails from "../Components/Resource/ResourceDetails";
import { ResourceDetailsUpdate } from "../Components/Resource/ResourceDetailsUpdate";
import ResultList from "../Components/ExternalResult/ResultList";
import ResultItem from "../Components/ExternalResult/ResultItem";
import ExternalResultUpload from "../Components/ExternalResult/ExternalResultUpload";
import ResultUpdate from "../Components/ExternalResult/ResultUpdate";
import NotificationsList from "../Components/Notifications/NotificationsList";
import { FileUpload } from "../Components/Patient/FileUpload";
import Investigation from "../Components/Facility/Investigations";
import ShowInvestigation from "../Components/Facility/Investigations/ShowInvestigation";
import InvestigationReports from "../Components/Facility/Investigations/Reports";
import AssetCreate from "../Components/Facility/AssetCreate";
import { withTranslation } from "react-i18next";
import DeathReport from "../Components/DeathReport/DeathReport";
import { make as CriticalCareRecording } from "../Components/CriticalCareRecording/CriticalCareRecording.gen";
import { make as VentilatorParametersEditor } from "../Components/CriticalCareRecording/VentilatorParametersEditor/CriticalCare__VentilatorParametersEditor.bs";
import ShowPushNotification from "../Components/Notifications/ShowPushNotification";
import { NoticeBoard } from "../Components/Notifications/NoticeBoard";
import { AddLocationForm } from "../Components/Facility/AddLocationForm";
import { LocationManagement } from "../Components/Facility/LocationManagement";
import AssetsList from "../Components/Assets/AssetsList";
import AssetManage from "../Components/Assets/AssetManage";
import { DailyRoundListDetails } from "../Components/Patient/DailyRoundListDetails";

const get = require("lodash.get");
const img = process.env.REACT_APP_LIGHT_LOGO;
const logoBlack = process.env.REACT_APP_BLACK_LOGO;

const routes = {
  "/critical_care_ventilator": () => (
    <>
      <VentilatorParametersEditor />
    </>
  ),
  "/": () => <HospitalList />,
  "/users": () => <ManageUsers />,
  "/user/add": () => <UserAdd />,
  "/user/profile": () => <UserProfile />,
  "/patients": () => <PatientManager />,
  "/patient/:id": ({ id }: any) => <PatientHome id={id} />,
  "/patient/:id/investigation_reports": ({ id }: any) => (
    <InvestigationReports id={id} />
  ),
  "/sample": () => <SampleViewAdmin />,
  "/sample/:id": ({ id }: any) => <SampleDetails id={id} />,
  "/patient/:patientId/test_sample/:sampleId/icmr_sample": ({
    patientId,
    sampleId,
  }: any) => <SampleReport id={patientId} sampleId={sampleId} />,
  "/facility": () => <HospitalList />,
  "/facility/create": () => <FacilityCreate />,
  "/facility/:facilityId/update": ({ facilityId }: any) => (
    <FacilityCreate facilityId={facilityId} />
  ),
  "/facility/:facilityId": ({ facilityId }: any) => (
    <FacilityHome facilityId={facilityId} />
  ),
  "/facility/:facilityId/resource/new": ({ facilityId }: any) => (
    <ResourceCreate facilityId={facilityId} />
  ),
  "/facility/:facilityId/triage": ({ facilityId }: any) => (
    <TriageForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/bed": ({ facilityId }: any) => (
    <BedCapacityForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/doctor": ({ facilityId }: any) => (
    <DoctorCapacityForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/patients": ({ facilityId }: any) => (
    <PatientManager facilityId={facilityId} />
  ),
  "/facility/:facilityId/patient": ({ facilityId }: any) => (
    <PatientRegister facilityId={facilityId} />
  ),
  "/facility/:facilityId/patient/:id": ({ facilityId, id }: any) => (
    <PatientHome facilityId={facilityId} id={id} />
  ),
  "/facility/:facilityId/patient/:id/update": ({ facilityId, id }: any) => (
    <PatientRegister facilityId={facilityId} id={id} />
  ),
  "/facility/:facilityId/patient/:patientId/sample-test": ({
    facilityId,
    patientId,
  }: any) => <SampleTest facilityId={facilityId} patientId={patientId} />,
  "/facility/:facilityId/patient/:patientId/sample/:id": ({ id }: any) => (
    <SampleDetails id={id} />
  ),
  "/facility/:facilityId/patient/:patientId/notes/": ({
    facilityId,
    patientId,
  }: any) => <PatientNotes patientId={patientId} facilityId={facilityId} />,
  "/facility/:facilityId/patient/:patientId/files/": ({
    facilityId,
    patientId,
  }: any) => (
    <FileUpload
      patientId={patientId}
      facilityId={facilityId}
      consultationId=""
      type="PATIENT"
      hideBack={false}
      audio={true}
      unspecified={true}
    />
  ),
  "/facility/:facilityId/triage/:id": ({ facilityId, id }: any) => (
    <TriageForm facilityId={facilityId} id={id} />
  ),
  "/facility/:facilityId/bed/:id": ({ facilityId, id }: any) => (
    <BedCapacityForm facilityId={facilityId} id={id} />
  ),
  "/facility/:facilityId/doctor/:id": ({ facilityId, id }: any) => (
    <DoctorCapacityForm facilityId={facilityId} id={id} />
  ),
  "/facility/:facilityId/patient/:patientId/consultation": ({
    facilityId,
    patientId,
  }: any) => <ConsultationForm facilityId={facilityId} patientId={patientId} />,
  "/facility/:facilityId/patient/:patientId/consultation/:id/update": ({
    facilityId,
    patientId,
    id,
  }: any) => (
    <ConsultationForm facilityId={facilityId} patientId={patientId} id={id} />
  ),
  "/facility/:facilityId/patient/:patientId/consultation/:id/files/": ({
    facilityId,
    patientId,
    id,
  }: any) => (
    <FileUpload
      facilityId={facilityId}
      patientId={patientId}
      consultationId={id}
      type="CONSULTATION"
      hideBack={false}
      audio={true}
      unspecified={true}
    />
  ),
  "/facility/:facilityId/patient/:patientId/consultation/:id/investigation/": ({
    facilityId,
    patientId,
    id,
  }: any) => (
    <Investigation
      consultationId={id}
      facilityId={facilityId}
      patientId={patientId}
    />
  ),
  "/facility/:facilityId/patient/:patientId/consultation/:id/investigation/:sessionId":
    ({ facilityId, patientId, id, sessionId }: any) => (
      <ShowInvestigation
        consultationId={id}
        facilityId={facilityId}
        patientId={patientId}
        sessionId={sessionId}
      />
    ),
  "/facility/:facilityId/patient/:patientId/consultation/:id/daily-rounds": ({
    facilityId,
    patientId,
    id,
  }: any) => (
    <DailyRounds
      facilityId={facilityId}
      patientId={patientId}
      consultationId={id}
    />
  ),
  "/facility/:facilityId/patient/:patientId/consultation/:consultationId/daily-rounds/:id/update":
    ({ facilityId, patientId, consultationId, id }: any) => (
      <DailyRounds
        facilityId={facilityId}
        patientId={patientId}
        consultationId={consultationId}
        id={id}
      />
    ),
  "/facility/:facilityId/patient/:patientId/consultation/:consultationId/daily-rounds/:id":
    ({ facilityId, patientId, consultationId, id }: any) => (
      <DailyRoundListDetails
        facilityId={facilityId}
        patientId={patientId}
        consultationId={consultationId}
        id={id}
      />
    ),

  "/facility/:facilityId/patient/:patientId/consultation/:consultationId/daily_rounds/:id":
    ({ facilityId, patientId, consultationId, id }: any) => (
      <CriticalCareRecording
        facilityId={facilityId}
        patientId={patientId}
        consultationId={consultationId}
        id={id}
        preview={true}
      />
    ),
  "/facility/:facilityId/patient/:patientId/consultation/:consultationId/daily_rounds/:id/update":
    ({ facilityId, patientId, consultationId, id }: any) => (
      <CriticalCareRecording
        facilityId={facilityId}
        patientId={patientId}
        consultationId={consultationId}
        id={id}
        preview={false}
      />
    ),
  "/facility/:facilityId/patient/:patientId/shift/new": ({
    facilityId,
    patientId,
    id,
  }: any) => <ShiftCreate facilityId={facilityId} patientId={patientId} />,
  "/facility/:facilityId/inventory": ({ facilityId }: any) => (
    <InventoryList facilityId={facilityId} />
  ),
  "/facility/:facilityId/location": ({ facilityId }: any) => (
    <LocationManagement facilityId={facilityId} />
  ),
  "/facility/:facilityId/inventory/add": ({ facilityId }: any) => (
    <AddInventoryForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/location/add": ({ facilityId }: any) => (
    <AddLocationForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/inventory/min_quantity/set": ({ facilityId }: any) => (
    <SetInventoryForm facilityId={facilityId} />
  ),
  "/facility/:facilityId/inventory/:inventoryId": ({
    facilityId,
    inventoryId,
  }: any) => <InventoryLog facilityId={facilityId} inventoryId={inventoryId} />,
  "/facility/:facilityId/inventory/min_quantity/list": ({
    facilityId,
  }: any) => <MinQuantityList facilityId={facilityId} />,
  "/facility/:facilityId/inventory/:inventoryId/update/:itemId": ({
    facilityId,
    inventoryId,
    itemId,
  }: any) => (
    <UpdateMinQuantity
      facilityId={facilityId}
      inventoryId={inventoryId}
      itemId={itemId}
    />
  ),
  "/facility/:facilityId/assets/new": ({ facilityId }: any) => (
    <AssetCreate facilityId={facilityId} />
  ),
  "/facility/:facilityId/assets/:assetId": ({ facilityId, assetId }: any) => (
    <AssetCreate facilityId={facilityId} assetId={assetId} />
  ),
  "/assets": () => <AssetsList />,
  "/assets/:assetId": ({ assetId }: any) => <AssetManage assetId={assetId} />,

  "/shifting": () =>
    localStorage.getItem("defaultShiftView") === "list" ? (
      <ShiftListView />
    ) : (
      <ShiftBoardView />
    ),
  "/shifting/board-view": () => <ShiftBoardView />,
  "/shifting/list-view": () => <ShiftListView />,
  "/shifting/:id": ({ id }: any) => <ShiftDetails id={id} />,
  "/shifting/:id/update": ({ id }: any) => <ShiftDetailsUpdate id={id} />,
  "/resource": () =>
    localStorage.getItem("defaultResourceView") === "list" ? (
      <ResourceListView />
    ) : (
      <ResourceBoardView />
    ),

  "/resource/board-view": () => <ResourceBoardView />,
  "/resource/list-view": () => <ResourceListView />,
  "/resource/:id": ({ id }: any) => <ResourceDetails id={id} />,
  "/resource/:id/update": ({ id }: any) => <ResourceDetailsUpdate id={id} />,
  "/external_results": () => <ResultList />,
  "/external_results/upload": () => <ExternalResultUpload />,
  "/external_results/:id": ({ id }: any) => <ResultItem id={id} />,
  "/external_results/:id/update": ({ id }: any) => <ResultUpdate id={id} />,
  "/death_report/:id": ({ id }: any) => <DeathReport id={id} />,
  "/notifications/:id": (id: any) => <ShowPushNotification external_id={id} />,
  "/notice_board/": () => <NoticeBoard />,
  "/facility/:facilityId/patient/:patientId/consultation/:id": ({
    facilityId,
    patientId,
    id,
  }: any) => (
    <ConsultationDetails
      facilityId={facilityId}
      patientId={patientId}
      consultationId={id}
      tab={"updates"}
    />
  ),
  "/facility/:facilityId/patient/:patientId/consultation/:id/:tab": ({
    facilityId,
    patientId,
    id,
    tab,
  }: any) => (
    <ConsultationDetails
      facilityId={facilityId}
      patientId={patientId}
      consultationId={id}
      tab={tab}
    />
  ),
};

let menus = [
  {
    title: "Facilities",
    link: "/facility",
    icon: "fas fa-hospital",
  },
  {
    title: "Patients",
    link: "/patients",
    icon: "fas fa-user-injured",
  },
  {
    title: "Assets",
    link: "/assets",
    icon: "fas fa-shopping-cart",
  },
  {
    title: "Sample Test",
    link: "/sample",
    icon: "fas fa-medkit",
  },
  {
    title: "Shifting",
    link: "/shifting",
    icon: "fas fa-ambulance",
  },
  {
    title: "Resource",
    link: "/resource",
    icon: "fas fa-heartbeat",
  },
  {
    title: "External Results",
    link: "/external_results",
    icon: "fas fa-vials",
  },
  {
    title: "Users",
    link: "/users",
    icon: "fas fa-user-friends",
  },
  {
    title: "Profile",
    link: "/user/profile",
    icon: "fas fa-user-secret",
  },
  {
    title: "Notice Board",
    link: "/notice_board/",
    icon: "fas fa-comment-alt",
  },
];

const AppRouter = (props: any) => {
  useRedirect("/", "/facility");
  const pages = useRoutes(routes);
  const path = usePath();
  const { t } = props;
  const url = path.split("/");
  const state: any = useSelector((state) => state);
  const { currentUser } = state;
  const [drawer, setDrawer] = useState(false);
  const loginUser = `${get(currentUser, "data.first_name", "")} ${get(
    currentUser,
    "data.last_name",
    ""
  )}`;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  const handleSidebarClick = (e: any, link: string) => {
    e.preventDefault();
    navigate(link);
  };

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      {drawer && (
        <div className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <div className="fixed inset-0">
              <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
            </div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-primary-800">
              <div className="absolute top-0 right-0 -mr-14 p-1">
                <button
                  onClick={(_) => setDrawer(false)}
                  className="flex items-center justify-center h-12 w-12 rounded-full focus:outline-none focus:bg-gray-600"
                  aria-label="Close sidebar"
                >
                  <svg
                    className="h-6 w-6 text-white"
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex-shrink-0 flex items-center px-4">
                <a href="/">
                  <img className="h-8 w-auto" src={img} alt="care logo" />
                </a>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2">
                  {menus.map((item) => {
                    const parts = item.link.split("/");
                    const selectedClasses = url.includes(parts && parts[1])
                      ? "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md bg-primary-900 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150"
                      : "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-primary-300 rounded-md hover:text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150";
                    return (
                      <a
                        key={item.title}
                        onClick={() => navigate(item.link, true)}
                        className={selectedClasses}
                      >
                        <i
                          className={
                            item.icon +
                            (url.includes(parts && parts[1])
                              ? " text-white"
                              : " text-primary-400") +
                            " mr-3 text-md group-hover:text-primary-300 group-focus:text-primary-300 transition ease-in-out duration-150"
                          }
                        ></i>
                        {t(item.title)}
                      </a>
                    );
                  })}
                  <NotificationsList />
                  <a
                    key="dashboard"
                    href={process.env.REACT_APP_DASHBOARD_URL}
                    className="mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-primary-300 rounded-md hover:text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150"
                  >
                    <i className="fas fa-tachometer-alt text-primary-400 mr-3 text-md group-hover:text-primary-300 group-focus:text-primary-300 transition ease-in-out duration-150"></i>
                    {t("Dashboard")}
                  </a>
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-primary-700 p-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                  <div className="flex items-center">
                    <div>
                      <div className="rounded-full h-8 w-8 flex items-center bg-white justify-center">
                        <i className="inline-block fas fa-user text-xl text-primary-700"></i>
                      </div>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm leading-5 font-medium text-white">
                        {loginUser}
                      </p>
                      <p
                        onClick={() => {
                          localStorage.removeItem("care_access_token");
                          localStorage.removeItem("care_refresh_token");
                          localStorage.removeItem("shift-filters");
                          localStorage.removeItem("external-filters");
                          localStorage.removeItem("lsg-ward-data");
                          navigate("/login");
                          window.location.reload();
                        }}
                        className="text-xs leading-4 font-medium text-primary-300 group-hover:text-primary-100 transition ease-in-out duration-150"
                      >
                        {t("sign_out")}
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex-shrink-0 w-14"></div>
          </div>
        </div>
      )}

      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-primary-800 pt-5">
          <div className="flex items-center flex-shrink-0 px-4">
            <a href="/">
              <img className="h-8 w-auto" src={img} alt="care logo" />
            </a>
          </div>
          <div className="mt-5 h-0 flex-1 flex flex-col overflow-y-auto">
            <nav className="flex-1 px-2 bg-primary-800">
              {menus.map((item) => {
                const parts = item.link.split("/");
                const selectedClasses = url.includes(parts && parts[1])
                  ? "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-white rounded-md bg-primary-900 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150"
                  : "mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-primary-300 rounded-md hover:text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150";
                return (
                  <a
                    key={item.title}
                    href={item.link}
                    onClick={(e) => handleSidebarClick(e, item.link)}
                    className={selectedClasses}
                  >
                    <i
                      className={
                        item.icon +
                        (url.includes(parts && parts[1])
                          ? " text-white"
                          : " text-primary-400") +
                        " mr-3 text-lg group-hover:text-primary-300 group-focus:text-primary-300 transition ease-in-out duration-150"
                      }
                    ></i>
                    {t(item.title)}
                  </a>
                );
              })}
              <NotificationsList />
              <a
                key="dashboard"
                href={process.env.REACT_APP_DASHBOARD_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-2 group flex w-full items-center px-2 py-2 text-base leading-5 font-medium text-primary-300 rounded-md hover:text-white hover:bg-primary-700 focus:outline-none focus:bg-primary-900 transition ease-in-out duration-150"
              >
                <i className="fas fa-tachometer-alt text-primary-400 mr-3 text-md group-hover:text-primary-300 group-focus:text-primary-300 transition ease-in-out duration-150"></i>
                {t("Dashboard")}
              </a>
            </nav>
          </div>
          <div className="flex-shrink-0 flex border-t border-primary-700 p-4">
            <a href="#" className="flex-shrink-0 w-full group block">
              <div className="flex items-center">
                <div>
                  <div className="rounded-full h-8 w-8 flex items-center bg-white justify-center">
                    <i className="inline-block fas fa-user text-xl text-primary-700"></i>
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm leading-5 font-medium text-white">
                    {loginUser}
                  </p>
                  <p
                    onClick={() => {
                      localStorage.removeItem("care_access_token");
                      localStorage.removeItem("care_refresh_token");
                      localStorage.removeItem("shift-filters");
                      localStorage.removeItem("external-filters");
                      localStorage.removeItem("lsg-ward-data");
                      navigate("/login");
                      window.location.reload();
                    }}
                    className="text-xs leading-4 font-medium text-primary-300 group-hover:text-primary-100 transition ease-in-out duration-150"
                  >
                    {t("sign_out")}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full flex-1 overflow-hidden">
        <div className="flex md:hidden relative z-10 flex-shrink-0 h-16 bg-white shadow">
          <button
            onClick={(_) => setDrawer(true)}
            className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden"
            aria-label="Open sidebar"
          >
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </button>
          <a
            href="/"
            className="md:hidden flex h-full w-full items-center px-4"
          >
            <img className="h-6 w-auto" src={logoBlack} alt="care logo" />
          </a>
        </div>

        <main
          id="pages"
          className="flex-1 overflow-y-auto pb-4 md:py-0 focus:outline-none"
        >
          <div className="max-w-7xl mx-auto px-0">{pages}</div>
        </main>
      </div>
    </div>
  );
};
export default withTranslation()(AppRouter);
