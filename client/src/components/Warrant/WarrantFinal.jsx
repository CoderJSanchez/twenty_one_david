import React, { Component } from "react";
class WarrantFinal extends Component {
  state = {};
  render() {
    return (
      <div>
        <h4 className="text-center">
          AFFIDAVIT FOR BLOOD SEARCH WARRANT RELATED TO DWI ARREST
        </h4>

        <p className="indent">
          The undersigned Affiant, being a peace officer under the laws of Texas
          and being duly sworn, on oath makes the following statements and
          accusations:
        </p>

        <p className="indent">
          {" "}
          My name is Officer <span className="afLastName" />,{" "}
          <span className="afId" />, I am a peace officer employed by the
          following law enforcement agency: GARLAND POLICE DEPARTMENT. I have
          successfully completed the State-mandated requirements to become a
          peace officer.
        </p>
        <p>
          1. There is in <span className="showCountyOfExecution" /> County,
          Texas a suspected person (“suspect”) described as follows:
          <br />
          Name: <span className="offenderFirst" />{" "}
          <span className="offenderLast" />
          Race: <span className="offenderRace" /> Sex:{" "}
          <span className="offenderSex" /> DOB:
          <span className="offenderDOB" /> DL/ID:{" "}
          <span className="offenderDL" />
          Height: <span className="offenderHeight" /> Weight:{" "}
          <span className="offenderWeight" /> lbs. Hair color:{" "}
          <span className="offenderHairColor" />
        </p>

        <p>
          2. Suspect is presently in custody of a law enforcement agency within
          Dallas County, namely the <strong> GARLAND POLICEDEPARTMENT</strong>,
          which will present the suspect to execute the warrant requested
          herein.
        </p>

        <p>
          3. The suspect has possession of and is concealing human blood, which
          constitutes evidence that the suspect committed the offense described
          in paragraph 4 below.
        </p>

        <p>
          4. On the <span className="day" /> day of <span className="month" /> ,{" "}
          <span className="year" /> , at or about <span className="time" />{" "}
          o’clock , the suspect did then and there operate a motor vehicle in a
          public place in County, Texas while intoxicated by not having the
          normal use of mental or physical faculties by reason of the
          introduction of alcohol, a controlled substance, a drug, a dangerous
          drug, a combination of two or more of those substances, or any other
          substance into the suspect’s body.
        </p>
        <p>
          5. The suspect was operating a motor vehicle in a public place, to
          wit: <span className="address" />, which is in
          <span className="showCountyOfOffense" /> County, Texas, on the above
          date and time based on the following facts: I observed the suspect
          doing so. The suspect admitted to me that the suspect had been
          operating a motor vehicle in a public place in County, Texas, prior to
          my arrival at the scene. A witness, <span className="witfirstName" />{" "}
          <span className="witLastName" /> <span className="ofcrWitLast" />{" "}
          <span className="ofcrWitId" />, conveyed information to me that he/she
          witnessed the suspect operating a motor vehicle in a public place in
          County, Texas, prior to my arrival at the scene.
        </p>

        <div className="page-break" />

        <p>
          6. Driving behavior: Additional facts leading me to believe that the
          suspect was intoxicated while operating a motor vehicle in a public
          place include: <span className="drivingBehavior" /> The public place
          is described as: briefly describe the public place (ex. roadway,
          public parking lot, etc.).
        </p>

        <p>
          7. During contact with the suspect, the following observations about
          the suspect were made:
        </p>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            A witness, <span className="witfirstName" />{" "}
            <span className="witLastName" /> <span className="ofcrWitLast" />{" "}
            <span className="ofcrWitId" />, conveyed information to me that
            he/she witnessed these observations.
          </label>
        </div>

        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="" />
          <label className="form-check-label" htmlFor="defaultCheck1">
            I observed these observations.
          </label>
        </div>
        <br />
        <p>
          8. During the contact with the suspect, the suspect was requested to
          perform field sobriety tests. The observations, signs of intoxication,
          and the results of those test are listed below. Field sobriety tests
          were conducted by:
        </p>

        <p>
          Affiant who is certified and/or trained in the detection of impaired
          or intoxicated drivers through the use of three standardized field
          sobriety tests [SFSTs], namely: Horizontal Gaze Nystagmus [HGN],
          One-Leg Stand [OLS], and Walk and Turn [WAT].
        </p>

        <p>
          SFST Officer including emplyee ID number, a fellow peace officer, who
          is known by your Affiant to be certified and/or trained in the
          detection of impaired or intoxicated drivers through the use of three
          standardized field sobriety tests [SFSTs], namely: Horizontal Gaze
          Nystagmus [HGN], One-Leg Stand [OLS], and Walk and Turn [WAT].
        </p>

        <p>
          {" "}
          Affiant who was trained in the detection of impaired or intoxicated
          drivers, by using a variety of field sobriety tests, learned during my
          Basic Garland Police Academy training.
        </p>

        <p>
          SFST Officer including emplyee ID number, a fellow peace officer, who
          is known by your Affiant to be trained in the detection of impaired or
          intoxicated drivers, using a variety of field sobriety tests, taught
          to them during their Basic Garland Police Academy training.
        </p>

        <p>
          The suspect refused to perform any sobriety tests and made the
          following statements: Enter any statements the defendant made on why
          he refused to do sobriety tests.
        </p>

        <p>
          The suspect was injured or unconscious and unable to perform any
          sobriety tests.
        </p>

        <p>
          10. Suspect’s oral statements and additional observations of
          intoxication: The suspect made the following statements: Include any
          incriminating statements referencing intoxciation, consuming alcohol
          or drugs, and any additional information leading affiant to believe
          suspect was intoxicated that hasn't been documented already..
        </p>

        <p>
          11. Open container evidence. An open container of alcoholic beverage
          was present at the scene. An open container of an alcoholic beverage,
          namely: List the acohol found, was found by: Name and DOB of witness
          OR Ofcr and Employee ID in the following location: State where the
          alcohol was located.
        </p>

        <p>
          12. Drug/Controlled substance evidence. No evidence of possible
          drug/controlled substance use was found or detected. The following
          drugs/drug paraphernalia: Identifiy any drugs or paraphernaila found,
          were found by: <span className="witfirstName" />{" "}
          <span className="witLastName" /> <span className="ofcrWitLast" />{" "}
          <span className="ofcrWitId" /> in the following location: Identify
          exact location of drugs or paraphernalia. I detected the odor of
          marijuana on the suspect’s person; inside the suspect’s vehicle.
          Statements made by the suspect or others indicating possible drug
          usage: ?????.
        </p>
        <p>
          13. Refusal evidence: After placing the suspect under arrest for
          Driving While Intoxicated, I requested a sample of the suspect’s
          breath and/or blood, and the suspect refused to provide a sample in
          violation of the Texas Implied Consent law. This is an indication to
          me that the suspect is attempting to hide evidence of his/her
          intoxication. Other relevant statements made by the suspect when
          refusing include: Indicate which chemical tests were offered and what
          the suspect said when he refused or that the subject was unconscious.
        </p>

        <p>
          14. As a peace officer I have successfully completed courses and/or
          training in the field of alcohol detection and intoxication-related
          offenses. I have seen intoxicated persons in the past and, during the
          course of my employment, I have observed numerous people who were
          under the influence of alcohol or other substances. Additionally, I
          have formed opinions on intoxication on many occasions and have had my
          suspicions confirmed by breath or blood samples that were analyzed
          after I performed my law enforcement duties relating to the detection
          of intoxicated drivers.{" "}
        </p>

        <p>
          15. Summary: Based upon my experiences, my training in
          intoxication-related offenses, and my observations of the suspect and
          the results of the tests performed by the suspect, if any, during my
          contact with the suspect, I believe that the suspect is intoxicated by
          not having the normal use of mental or physical faculties by reason of
          the introduction of alcohol, a controlled substance, a drug, a
          dangerous drug, a combination of two or more of those substances, or
          any other substance into the suspect’s body.
        </p>

        <p>
          16. I know from my training and experience that alcohol and other
          intoxicating substances are absorbed into the bloodstream of an
          intoxicated person and that the blood of such person can be analyzed
          for the presence of alcohol and other intoxicating substances.
        </p>

        <p>
          17. Further, Affiant requests the authority to forensically analyze
          the blood seized pursuant to this search warrant for the presence of
          intoxicating substances.
        </p>

        <p>
          {" "}
          WHEREFORE, based upon this affidavit Affiant asks for a search warrant
          that will authorize Affiant or Affiant’s agent to search the person of
          the suspect for the blood evidence described above and seize and
          forensically analyze the same as evidence that the offense described
          was committed and that the suspect committed the said offense.
        </p>

        <p>
          {" "}
          Further Affiant asks for issuance of an order to appropriate third
          parties directing them to assist Affiant in the execution of said
          warrant.
        </p>

        <p>______________________________________</p>
        <p> Affiant, officer name including employee ID number,</p>

        <p>
          {" "}
          Subscribed and sworn to before me on this _______ day of
          _____________________, 20_____.
        </p>

        <p> GPD Case No.: _______________________</p>
        <h5>SEARCH WARRANT</h5>

        <h5>
          The State Of Texas: To any Sheriff or any Peace Officer of County,
          Texas, or any Peace Officer of the State of Texas:
        </h5>

        <p>
          Whereas, the Affiant, whose name appears on the Affidavit attached
          hereto is a peace officer under the laws of Texas and did heretofore
          this day subscribed and swore to said affidavit before me, (which said
          Affidavit is here now made a part hereof for all purposes and
          incorporated herein as if written verbatim within the confines of this
          warrant) and whereas I find that the verified facts stated by Affiant
          in said Affidavit show that Affiant has probable cause for the belief
          Affiant expresses herein and establishes the existence of proper
          grounds for the issuance of this Warrant:
        </p>

        <p>
          Now, therefore, you are commanded to take custody of the suspect. You
          shall search for, seize and maintain as evidence the property
          described in said Affidavit, to-wit: human blood from the body of the
          following described individual:
        </p>

        <p>
          Name: <span className="offenderFirst" />{" "}
          <span className="offenderLast" />
          Race: <span className="offenderRace" /> Sex:{" "}
          <span className="offenderSex" /> DOB:
          <span className="offenderDOB" /> DL/ID:{" "}
          <span className="offenderDL" />
          Height: <span className="offenderHeight" /> Weight:{" "}
          <span className="offenderWeight" /> lbs. Hair color:{" "}
          <span className="offenderHairColor" />
        </p>

        <p>
          Further, authority is hereby granted to forensically analyze the blood
          seized pursuant to this search warrant for the presence of
          intoxicating substances. Herein fail not, but have you then and there
          this warrant within three days, exclusive of the day of its issuance,
          with your return thereon, showing how you have executed the same.
        </p>

        <p>
          Issued on this the ____ day of ___________________________, 20_____,
          at ___________ o’clock P.M. / A.M., to certify which witness my hand
          this day.
        </p>

        <p>
          Municipal Judge, City of Garland, Magistrate in and for Dallas and
          Collin Counties, Texas Other Magistrate Title and Office:
        </p>

        <div className="page-break" />
        <h4>ORDER FOR ASSISTANCE IN EXECUTION OF SEARCH WARRANT</h4>

        <p>
          {" "}
          To any physician, nurse, medical technician, or phlebotomist, licensed
          by the State of Texas, or other person qualified in the intravenous
          removal of human blood:
        </p>

        <p>
          Whereas, the affiant whose name appears on the affidavit attached
          hereto is a peace officer under the laws of Texas and did heretofore
          this day subscribe and swear to said affidavit before me (which said
          affidavit is here now made a part hereof for all purposes and
          incorporated herein as if written verbatim within the confines of this
          Order), and whereas I find that the verified facts stated by affiant
          in said Affidavit show that affiant has probable cause for the belief
          he/she expresses herein and establishes existence of proper grounds
          for issuance of a search warrant;
        </p>

        <p>
          Therefore you are hereby ordered and commanded to cooperate with any
          peace officer requesting your professional assistance in the execution
          of this warrant.
        </p>

        <p>
          {" "}
          Herein fail not, as this order is directed to any individual whose aid
          and assistance is requested by the officer bearing the accompanying
          search warrant, is authorized by the full authority of this Court to
          issue warrants and orders to enforce the laws of the State of Texas,
          and Article 18.08 of the Texas Code of Criminal Procedure.{" "}
          <strong>
            Any individual who fails to comply with this Order when requested
            shall be liable for contempt of this Court and subject to all
            penalties authorized by law.
          </strong>
        </p>

        <p>
          {" "}
          Ordered this the _____ day of __________________, 20___ at ________
          o’clock P.M. / A.M. to certify which witness my hand this day.
        </p>

        <p>
          Municipal Judge, City of Garland, Magistrate in and for Dallas and
          Collin Counties, Texas Other Magistrate Title and Office:{" "}
        </p>

        <div className="page-break" />
        <h4>RETURN AND INVENTORY</h4>

        <p>
          The undersigned Affiant, being a Peace Officer under the laws of Texas
          and being duly sworn, on oath certifies that the foregoing Warrant
          came to hand on the day it was issued and that it was executed on the{" "}
          <span className="day" /> day of <span className="month" />,{" "}
          <span className="year" />, by making the search directed therein and
          seizing during such search the following described property:
        </p>

        <p>A specimen of the suspect’s blood.</p>
        <p>________________________________________</p>
        <p> Affiant</p>

        <p>
          {" "}
          SUBSCRIBED AND SWORN to before me, the undersigned authority on this
          _____ day of _____________________, 20_____.
        </p>
        <p>Peace Officer, State of Texas</p>
      </div>
    );
  }
}

export default WarrantFinal;
