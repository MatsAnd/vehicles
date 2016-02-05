var adrCertificationRequest = {
	title: "The Title",
	technicalRequirements: {
		questions: [
			{id: "1", value: "neida"},
			{id: "2", value: 2, comment: "test", remark: "something"},
			{id: "3", value: 1}
		]
	},
	technicalControl: {
		previousControlDate: "2013-01-01",
		controlDate: "2016-01-30",
		checkList: [
			{ id: 123, value: "no" }
		]
	},
	documents: [
		{
			filename: "scan.pdf",
			roles: [{id:"123"}, {id:"12"}]
		},
		{
			filename: "pic.jpeg",
			roles: [{id:"1"}]
		},
	],
	technicalData: {
		extensionType: "1",
		producer: "XYZ Tank Fabrikat",
		registrationNumber: "ABC123",
		serialNumber: 442114,
		productionYear: 2010,
		tankCode: "S",
		tankCompartments: [ 1000, 2050, null, null ],
		leakageTest: "2013-11-20",
		pressureTest: "2013-11-19"
	}
};

var referenceData = {
	inspectionQuestions: [
		{
			id: "1",
			heading: "9.2.2.2 Ledninger",
			options: [{value: 0, text: "Dekker ikke krav"}, {value: 1, text: "Ikke valgt"}, {value: "neida", text: "Ingen ledninger"}]
		},
		{
			id: "2",
			heading: "9.2.2.3 Hovedstrømbryter",
			options: [{value: 0, text: "Dekker ikke krav"}, {value: 1, text: "Ikke valgt"}, {value: 2, text: "9.2.2.3"}]
		},
		{
			id: "3",
			heading: "9.2.2.4 Batterier",
			options: [{value: 0, text: "Dekker ikke krav", requiresComment: true}, {value: 0, text: "Dekkes av annet krav", requiresComment: true}, {value: 1, text: "Ikke valgt"}, {value: 2, text: "9.2.2.3"}]
		},
		{
			id: "4",
			heading: "9.2.2.5 Kretser under konstant spenning",
			options: [{value: 0, text: "Dekker ikke krav"}, {value: 1, text: "Ikke valgt"}, {value: 2, text: "9.2.2.3"}]
		},
		{
			id: "5",
			heading: "9.2.2.6 Elektriske installasjoner bak førerhuset",
			options: [{value: 0, text: "Dekker ikke krav"}, {value: 1, text: "Ikke valgt"}, {value: 2, text: "9.2.2.3"}]
		},
		{
			id: "6",
			heading: "9.2.3.1 Bremseutstyr Blokkeringsfritt bremsesystem",
			options: [{value: 0, text: "Dekker ikke krav"}, {value: 1, text: "Ikke valgt"}, {value: 2, text: "ADR/RID 9.2.2.6"}]
		}
	],
	controlQuestions: [
		{id: 123, text: "Samsvar mellom fabrikasjonsplate og dokumentasjon på tank?"},
		{id: 124, text: "Samsvar mellom fabrikasjonsplate og dokumentasjon på kjøretøy?"},
	],
	documentTypes: [
		{id: "123", text: "ADR attest", required: true },
		{id: "124", text: "SFOOR anbefaling", required: true },
		{id: "100", text: "Sjekkliste hallkontroll", required: true },
		{id: "12", text: "Vedtak", required: false },
		{id: "1", text: "Annet", required: false, comment: true },
	]
};

function fetchAdrData() {
	return new Promise(function(resolve) {
		return resolve({request: adrCertificationRequest, referenceData: referenceData});
	});
}

function updateAdrData(request) {
  	for (var field in request) {
  	  	adrCertificationRequest[field] = request[field];
  	}	
}
