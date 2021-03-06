PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE Patients (Patient_ID VARCHAR(50) PRIMARY KEY,P_First_Name VARCHAR(50),P_Last_Name VARCHAR(50),DOB DATE,Gender VARCHAR(50),Symptoms VARCHAR (50));
INSERT INTO Patients VALUES('2553811640','Susanna','Nockolds','24/4/1999','Female','Stomach ache, twitching eyes');
INSERT INTO Patients VALUES('6622843430','Berky','Stollwerk','11/24/1993','Non-binary','Tiredness and fatigue, bloated stomach');
INSERT INTO Patients VALUES('7252094766','Brody','Le Pine','1/14/1988','Bigender','Body aches and joint pain');
INSERT INTO Patients VALUES('2258267935','Vally','Albion','2/10/2021','Non-binary','Low mood, loss of interest, hallucinations');
INSERT INTO Patients VALUES('9368400121','Ly','Naylor','4/3/1955','Bigender','Chest pain, frequent urination');

CREATE TABLE Prescriptions (Drug_name VARCHAR(50), Stock INT (50),Drug_ID VARCHAR (50),Patient_ID VARCHAR(50),FOREIGN KEY (Patient_ID) REFERENCES Patients (Patient_ID),FOREIGN KEY (Drug_ID) REFERENCES Diagnostics (Drug_ID));
INSERT INTO Prescriptions VALUES(' Butalbital, Acetaminophen, and Caffeine ',10,'0548-1140','2258267935');
INSERT INTO Prescriptions VALUES(' CEFOTAXIME ',23,'60760-914','2553811640');
INSERT INTO Prescriptions VALUES(' Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride ',18,'51285-444','6622843430');
INSERT INTO Prescriptions VALUES(' Glyburide and Metformin ',14,'68788-9900','7252094766');
INSERT INTO Prescriptions VALUES('Mannitol',20,'10742-0009','9368400121');

CREATE TABLE Diagnostics (Patient_ID VARCHAR(50), P_First_name VARCHAR(50),P_Last_name VARCHAR(50),Diagnosis VARCHAR(50),Drug_ID VARCHAR (50) PRIMARY KEY,Drug_name VARCHAR(50),Tests VARCHAR(50),Referal VARCHAR(50),FOREIGN KEY (Patient_ID) REFERENCES Patients (Patient_ID));
INSERT INTO Diagnostics VALUES('6622843430','Berky','Stollwerk','Subluxation of interphalangeal joint of left great toe, subsequent encounter','68788-9900','Glyburide and Metformin',' Transfer Facial Nerve to Glossopharyngeal Nerve, Open Approach','0591-3197');
INSERT INTO Diagnostics VALUES('7252094766','Brody','Le Pine','Enlarged lymph nodes, unspecified','60760-914','CEFOTAXIME',' Supplement Lumbar Vertebra with Synthetic Substitute, Percutaneous Endoscopic Approach ','56136-010');
INSERT INTO Diagnostics VALUES('2258267935','Vally','Albion','Underdosing of antidotes and chelating agents','51285-444','Acetaminophen, Dextromethorphan Hydrobromide, Phenylephrine Hydrochloride',' Fusion of Left Shoulder Joint with Synthetic Substitute, Percutaneous Approach','70253-292');
INSERT INTO Diagnostics VALUES('9368400121','Ly','Naylor','Nondisplaced fracture of medial condyle of left tibia','10742-0009','Mannitol','Reposition Right Humeral Head with External Fixation Device, Percutaneous Endoscopic Approach','49288-0136');
INSERT INTO Diagnostics VALUES('2553811640','Susanna','Nockolds','Other injury of muscle and tendon of long flexor muscle of toe at ankle and foot level, unspecified foot, sequela','0548-1140','Butalbital, Acetaminophen, and Caffeine','Supplement Occipital-cervical Joint with Autologous Tissue Substitute, Percutaneous Approach','54973-3134');

CREATE TABLE volunteers (ID VARCHAR(50) PRIMARY KEY, First_Name VARCHAR(50), Last_Name VARCHAR(50), Profession VARCHAR(50), Nationality VARCHAR(50), camp_loc VARCHAR(50));
INSERT INTO volunteers VALUES('620023','Gerda','Sirman','Doctor','Argentina','Amazonas');
INSERT INTO volunteers VALUES('620044','Winnie','Pavel','Doctor','Greece','Amazonas');
INSERT INTO volunteers VALUES('620050','Evangelin','Coatham','Doctor','Czech Republic','Amazonas');
INSERT INTO volunteers VALUES('62000','Tana','Clendennen','Doctor','Czech Republic','Amazonas');
INSERT INTO volunteers VALUES('44100','Reuben','Fielden','Pharmacist','France','Amazonas');
INSERT INTO volunteers VALUES('55200','Ranice','Lardiner','Admin','Poland','Pacifica');
INSERT INTO volunteers VALUES('66200','George','Mcintosh','Admin','Scotland','Atlantica');
INSERT INTO volunteers VALUES('77622','Jameela','Jael','Admin','Spain','Amazonas');

CREATE TABLE Doctors (Name VARCHAR(50),Doctor_ID VARCHAR (50), Gender VARCHAR(50), Availability DATE, FOREIGN KEY (Doctor_ID) REFERENCES volunteers (ID));
INSERT INTO Doctors VALUES('Gerda Sirman','620023','M','24/06/2021');
INSERT INTO Doctors VALUES('Winnie Pavel','620044','F','12/06/2021');
INSERT INTO Doctors VALUES('Tana Clendennen','62000','F','20/06/2021');
INSERT INTO Doctors VALUES('Evangelin Coatham','620050','F','20/06/2021');
COMMIT;
