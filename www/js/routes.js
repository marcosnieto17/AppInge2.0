angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('gUAUNLaR.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('gUAUNLaR.acercaDeLaApp', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDeLaApp.html',
        controller: 'acercaDeLaAppCtrl'
      }
    }
  })

  .state('gUAUNLaR', {
    url: '/side-menu21',
    templateUrl: 'templates/gUAUNLaR.html',
    controller: 'gUAUNLaRCtrl'
  })

  .state('gUAUNLaR.ingresantes', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingresantes.html',
        controller: 'ingresantesCtrl'
      }
    }
  })

  .state('gUAUNLaR.requisitosDeIngreso', {
    url: '/page16',
    views: {
      'side-menu21': {
        templateUrl: 'templates/requisitosDeIngreso.html',
        controller: 'requisitosDeIngresoCtrl'
      }
    }
  })

  .state('gUAUNLaR.calendarioAcadMico', {
    url: '/page19',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calendarioAcadMico.html',
        controller: 'calendarioAcadMicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.mapasUNLaR', {
    url: '/page20',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mapasUNLaR.html',
        controller: 'mapasUNLaRCtrl'
      }
    }
  })

  .state('gUAUNLaR.graduados', {
    url: '/page21',
    views: {
      'side-menu21': {
        templateUrl: 'templates/graduados.html',
        controller: 'graduadosCtrl'
      }
    }
  })

  .state('gUAUNLaR.adscripciones', {
    url: '/page22',
    views: {
      'side-menu21': {
        templateUrl: 'templates/adscripciones.html',
        controller: 'adscripcionesCtrl'
      }
    }
  })

  .state('gUAUNLaR.fechasDeColaciN', {
    url: '/page23',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fechasDeColaciN.html',
        controller: 'fechasDeColaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.obraSocialGraduados', {
    url: '/page24',
    views: {
      'side-menu21': {
        templateUrl: 'templates/obraSocialGraduados.html',
        controller: 'obraSocialGraduadosCtrl'
      }
    }
  })

  .state('gUAUNLaR.proyectosDeExtensiN', {
    url: '/page25',
    views: {
      'side-menu21': {
        templateUrl: 'templates/proyectosDeExtensiN.html',
        controller: 'proyectosDeExtensiNCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMiteDeTTulo', {
    url: '/page26',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo.html',
        controller: 'trMiteDeTTuloCtrl'
      }
    }
  })

  .state('gUAUNLaR.redDeTrabajo', {
    url: '/page27',
    views: {
      'side-menu21': {
        templateUrl: 'templates/redDeTrabajo.html',
        controller: 'redDeTrabajoCtrl'
      }
    }
  })

  .state('gUAUNLaR.estudiantes', {
    url: '/page28',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estudiantes.html',
        controller: 'estudiantesCtrl'
      }
    }
  })

  .state('gUAUNLaR.infoExMenesFinales', {
    url: '/page29',
    views: {
      'side-menu21': {
        templateUrl: 'templates/infoExMenesFinales.html',
        controller: 'infoExMenesFinalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.eVAUNLaR', {
    url: '/page30',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eVAUNLaR.html',
        controller: 'eVAUNLaRCtrl'
      }
    }
  })

  .state('gUAUNLaR.sIU', {
    url: '/page31',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sIU.html',
        controller: 'sIUCtrl'
      }
    }
  })

  .state('gUAUNLaR.beneficios', {
    url: '/page32',
    views: {
      'side-menu21': {
        templateUrl: 'templates/beneficios.html',
        controller: 'beneficiosCtrl'
      }
    }
  })

  .state('gUAUNLaR.comedorUniversitario', {
    url: '/page33',
    views: {
      'side-menu21': {
        templateUrl: 'templates/comedorUniversitario.html',
        controller: 'comedorUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.bibliotecaCentral', {
    url: '/page34',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bibliotecaCentral.html',
        controller: 'bibliotecaCentralCtrl'
      }
    }
  })

  .state('gUAUNLaR.licenciaEstudiantil', {
    url: '/page35',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licenciaEstudiantil.html',
        controller: 'licenciaEstudiantilCtrl'
      }
    }
  })

  .state('gUAUNLaR.seguroEstudiantil', {
    url: '/page36',
    views: {
      'side-menu21': {
        templateUrl: 'templates/seguroEstudiantil.html',
        controller: 'seguroEstudiantilCtrl'
      }
    }
  })

  .state('gUAUNLaR.museoUNLaR', {
    url: '/page39',
    views: {
      'side-menu21': {
        templateUrl: 'templates/museoUNLaR.html',
        controller: 'museoUNLaRCtrl'
      }
    }
  })

  .state('gUAUNLaR.deporte', {
    url: '/page40',
    views: {
      'side-menu21': {
        templateUrl: 'templates/deporte.html',
        controller: 'deporteCtrl'
      }
    }
  })

  .state('gUAUNLaR.salaDePrimerosAuxilios', {
    url: '/page41',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salaDePrimerosAuxilios.html',
        controller: 'salaDePrimerosAuxiliosCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMites', {
    url: '/page42',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMites.html',
        controller: 'trMitesCtrl'
      }
    }
  })

  .state('gUAUNLaR.solicitarMesaEspecial', {
    url: '/page43',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarMesaEspecial.html',
        controller: 'solicitarMesaEspecialCtrl'
      }
    }
  })

  .state('gUAUNLaR.solicitarEquivalencias', {
    url: '/page44',
    views: {
      'side-menu21': {
        templateUrl: 'templates/solicitarEquivalencias.html',
        controller: 'solicitarEquivalenciasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cambioDePlanDeEstudios', {
    url: '/page45',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambioDePlanDeEstudios.html',
        controller: 'cambioDePlanDeEstudiosCtrl'
      }
    }
  })

  .state('gUAUNLaR.cancelaciNDeMatrCula', {
    url: '/page46',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cancelaciNDeMatrCula.html',
        controller: 'cancelaciNDeMatrCulaCtrl'
      }
    }
  })

  .state('gUAUNLaR.duplicadoDeLibreta', {
    url: '/page47',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duplicadoDeLibreta.html',
        controller: 'duplicadoDeLibretaCtrl'
      }
    }
  })

  .state('gUAUNLaR.certificadoDeAlumnoRegular', {
    url: '/page48',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoRegular.html',
        controller: 'certificadoDeAlumnoRegularCtrl'
      }
    }
  })

  .state('gUAUNLaR.certificadoDeAlumnoInscripto', {
    url: '/page49',
    views: {
      'side-menu21': {
        templateUrl: 'templates/certificadoDeAlumnoInscripto.html',
        controller: 'certificadoDeAlumnoInscriptoCtrl'
      }
    }
  })

  .state('gUAUNLaR.ayudanteAlumno', {
    url: '/page50',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteAlumno.html',
        controller: 'ayudanteAlumnoCtrl'
      }
    }
  })

  .state('gUAUNLaR.corregirDatosPersonales', {
    url: '/page51',
    views: {
      'side-menu21': {
        templateUrl: 'templates/corregirDatosPersonales.html',
        controller: 'corregirDatosPersonalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.trMiteDeTTulo2', {
    url: '/page52',
    views: {
      'side-menu21': {
        templateUrl: 'templates/trMiteDeTTulo2.html',
        controller: 'trMiteDeTTulo2Ctrl'
      }
    }
  })

  .state('gUAUNLaR.nDeExpedienteDeMiTrMite', {
    url: '/page53',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nDeExpedienteDeMiTrMite.html',
        controller: 'nDeExpedienteDeMiTrMiteCtrl'
      }
    }
  })

  .state('gUAUNLaR.inicioDeTrabajoFinal', {
    url: '/page54',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicioDeTrabajoFinal.html',
        controller: 'inicioDeTrabajoFinalCtrl'
      }
    }
  })

  .state('gUAUNLaR.reglamentos', {
    url: '/page55',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentos.html',
        controller: 'reglamentosCtrl'
      }
    }
  })

  .state('gUAUNLaR.reglamentoDeAlumnos', {
    url: '/page37',
    views: {
      'side-menu21': {
        templateUrl: 'templates/reglamentoDeAlumnos.html',
        controller: 'reglamentoDeAlumnosCtrl'
      }
    }
  })

  .state('gUAUNLaR.protocoloDeViolenciaDeGenero', {
    url: '/page38',
    views: {
      'side-menu21': {
        templateUrl: 'templates/protocoloDeViolenciaDeGenero.html',
        controller: 'protocoloDeViolenciaDeGeneroCtrl'
      }
    }
  })

  .state('gUAUNLaR.estatutoUniversitario', {
    url: '/page56',
    views: {
      'side-menu21': {
        templateUrl: 'templates/estatutoUniversitario.html',
        controller: 'estatutoUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeIncentivoAcadMico', {
    url: '/page57',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeIncentivoAcadMico.html',
        controller: 'becasDeIncentivoAcadMicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasTransporte', {
    url: '/page62',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasTransporte.html',
        controller: 'becasTransporteCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeExperienciaLaboral', {
    url: '/page58',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeExperienciaLaboral.html',
        controller: 'becasDeExperienciaLaboralCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasProgresar', {
    url: '/page63',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasProgresar.html',
        controller: 'becasProgresarCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeTutorAsAcadMicas', {
    url: '/page59',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeTutorAsAcadMicas.html',
        controller: 'becasDeTutorAsAcadMicasCtrl'
      }
    }
  })

  .state('gUAUNLaR.ayudanteInvestigador', {
    url: '/page64',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ayudanteInvestigador.html',
        controller: 'ayudanteInvestigadorCtrl'
      }
    }
  })

  .state('gUAUNLaR.preIniciaciNALaInvestigaciN', {
    url: '/page65',
    views: {
      'side-menu21': {
        templateUrl: 'templates/preIniciaciNALaInvestigaciN.html',
        controller: 'preIniciaciNALaInvestigaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.convocatoriaBecas', {
    url: '/page61',
    views: {
      'side-menu21': {
        templateUrl: 'templates/convocatoriaBecas.html',
        controller: 'convocatoriaBecasCtrl'
      }
    }
  })

  .state('gUAUNLaR.vinculaciNTecnolGica', {
    url: '/page66',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinculaciNTecnolGica.html',
        controller: 'vinculaciNTecnolGicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.planesDeEstudio', {
    url: '/page82',
    views: {
      'side-menu21': {
        templateUrl: 'templates/planesDeEstudio.html',
        controller: 'planesDeEstudioCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasAplicadas', {
    url: '/page83',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasAplicadas.html',
        controller: 'cienciasAplicadasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasExactasFSicasYNaturales', {
    url: '/page84',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasExactasFSicasYNaturales.html',
        controller: 'cienciasExactasFSicasYNaturalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasHumanasYDeLaEducaciN', {
    url: '/page85',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasHumanasYDeLaEducaciN.html',
        controller: 'cienciasHumanasYDeLaEducaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasSocialesJurDicasYEconMicas', {
    url: '/page86',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasSocialesJurDicasYEconMicas.html',
        controller: 'cienciasSocialesJurDicasYEconMicasCtrl'
      }
    }
  })

  .state('gUAUNLaR.cienciasDeLaSalud', {
    url: '/page87',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cienciasDeLaSalud.html',
        controller: 'cienciasDeLaSaludCtrl'
      }
    }
  })

  .state('gUAUNLaR.aimogasta', {
    url: '/page88',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aimogasta.html',
        controller: 'aimogastaCtrl'
      }
    }
  })

  .state('gUAUNLaR.catuna', {
    url: '/page89',
    views: {
      'side-menu21': {
        templateUrl: 'templates/catuna.html',
        controller: 'catunaCtrl'
      }
    }
  })

  .state('gUAUNLaR.chamical', {
    url: '/page90',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chamical.html',
        controller: 'chamicalCtrl'
      }
    }
  })

  .state('gUAUNLaR.chepes', {
    url: '/page91',
    views: {
      'side-menu21': {
        templateUrl: 'templates/chepes.html',
        controller: 'chepesCtrl'
      }
    }
  })

  .state('gUAUNLaR.villaUniN', {
    url: '/page92',
    views: {
      'side-menu21': {
        templateUrl: 'templates/villaUniN.html',
        controller: 'villaUniNCtrl'
      }
    }
  })

  .state('gUAUNLaR.olta', {
    url: '/page93',
    views: {
      'side-menu21': {
        templateUrl: 'templates/olta.html',
        controller: 'oltaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tama', {
    url: '/page94',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tama.html',
        controller: 'tamaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ulapes', {
    url: '/page95',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ulapes.html',
        controller: 'ulapesCtrl'
      }
    }
  })

  .state('gUAUNLaR.vinchina', {
    url: '/page96',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vinchina.html',
        controller: 'vinchinaCtrl'
      }
    }
  })

  .state('gUAUNLaR.becaExtensionista', {
    url: '/page17',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becaExtensionista.html',
        controller: 'becaExtensionistaCtrl'
      }
    }
  })

  .state('gUAUNLaR.becasDeportivasYCulturales', {
    url: '/page77',
    views: {
      'side-menu21': {
        templateUrl: 'templates/becasDeportivasYCulturales.html',
        controller: 'becasDeportivasYCulturalesCtrl'
      }
    }
  })

  .state('gUAUNLaR.cineClubUniversitario', {
    url: '/page81',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cineClubUniversitario.html',
        controller: 'cineClubUniversitarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecElectroElectrNica', {
    url: '/page97',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecElectroElectrNica.html',
        controller: 'tecElectroElectrNicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingIndustrial', {
    url: '/page98',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingIndustrial.html',
        controller: 'ingIndustrialCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingAgronMica', {
    url: '/page99',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingAgronMica.html',
        controller: 'ingAgronMicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingAgroindustrial', {
    url: '/page100',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingAgroindustrial.html',
        controller: 'ingAgroindustrialCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingEnAlimentos', {
    url: '/page101',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingEnAlimentos.html',
        controller: 'ingEnAlimentosCtrl'
      }
    }
  })

  .state('gUAUNLaR.arquitectura', {
    url: '/page102',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arquitectura.html',
        controller: 'arquitecturaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingCivil', {
    url: '/page103',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingCivil.html',
        controller: 'ingCivilCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingDeMinas', {
    url: '/page104',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingDeMinas.html',
        controller: 'ingDeMinasCtrl'
      }
    }
  })

  .state('gUAUNLaR.geologA', {
    url: '/page105',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geologA.html',
        controller: 'geologACtrl'
      }
    }
  })

  .state('gUAUNLaR.bioquMica', {
    url: '/page106',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bioquMica.html',
        controller: 'bioquMicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.farmacia', {
    url: '/page107',
    views: {
      'side-menu21': {
        templateUrl: 'templates/farmacia.html',
        controller: 'farmaciaCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingEnSistemasDeInformaciN', {
    url: '/page108',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingEnSistemasDeInformaciN.html',
        controller: 'ingEnSistemasDeInformaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingEnMecatrNica', {
    url: '/page109',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingEnMecatrNica.html',
        controller: 'ingEnMecatrNicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnCienciasBiolGicas', {
    url: '/page110',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnCienciasBiolGicas.html',
        controller: 'licEnCienciasBiolGicasCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnDiseOYProducciNMultimedial', {
    url: '/page111',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnDiseOYProducciNMultimedial.html',
        controller: 'licEnDiseOYProducciNMultimedialCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnSistemasDeInformaciN', {
    url: '/page112',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnSistemasDeInformaciN.html',
        controller: 'licEnSistemasDeInformaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecUniversitariaEnBiogenTica', {
    url: '/page113',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecUniversitariaEnBiogenTica.html',
        controller: 'tecUniversitariaEnBiogenTicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecUniversitariaEnInformTica', {
    url: '/page114',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecUniversitariaEnInformTica.html',
        controller: 'tecUniversitariaEnInformTicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnEnfermerA', {
    url: '/page115',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnEnfermerA.html',
        controller: 'licEnEnfermerACtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnProducciNDeBioimGenes', {
    url: '/page116',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnProducciNDeBioimGenes.html',
        controller: 'licEnProducciNDeBioimGenesCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnTerapiaOcupacional', {
    url: '/page117',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnTerapiaOcupacional.html',
        controller: 'licEnTerapiaOcupacionalCtrl'
      }
    }
  })

  .state('gUAUNLaR.medicina', {
    url: '/page118',
    views: {
      'side-menu21': {
        templateUrl: 'templates/medicina.html',
        controller: 'medicinaCtrl'
      }
    }
  })

  .state('gUAUNLaR.odontologA', {
    url: '/page119',
    views: {
      'side-menu21': {
        templateUrl: 'templates/odontologA.html',
        controller: 'odontologACtrl'
      }
    }
  })

  .state('gUAUNLaR.tecRadiologAYTerapiaRadiante', {
    url: '/page120',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecRadiologAYTerapiaRadiante.html',
        controller: 'tecRadiologAYTerapiaRadianteCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnCienciasDeLaEducaciN', {
    url: '/page121',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnCienciasDeLaEducaciN.html',
        controller: 'licEnCienciasDeLaEducaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.profEnCienciasDeLaEducaciN', {
    url: '/page122',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profEnCienciasDeLaEducaciN.html',
        controller: 'profEnCienciasDeLaEducaciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.abogacA', {
    url: '/page123',
    views: {
      'side-menu21': {
        templateUrl: 'templates/abogacA.html',
        controller: 'abogacACtrl'
      }
    }
  })

  .state('gUAUNLaR.contadorPBlico', {
    url: '/page124',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contadorPBlico.html',
        controller: 'contadorPBlicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.escribanA', {
    url: '/page125',
    views: {
      'side-menu21': {
        templateUrl: 'templates/escribanA.html',
        controller: 'escribanACtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnAdministraciN', {
    url: '/page126',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnAdministraciN.html',
        controller: 'licEnAdministraciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnEconomA', {
    url: '/page128',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnEconomA.html',
        controller: 'licEnEconomACtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnCienciaPolTica', {
    url: '/page129',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnCienciaPolTica.html',
        controller: 'licEnCienciaPolTicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnTurismo', {
    url: '/page130',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnTurismo.html',
        controller: 'licEnTurismoCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnComunicaciNSocial', {
    url: '/page131',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnComunicaciNSocial.html',
        controller: 'licEnComunicaciNSocialCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnTrabajoSocial', {
    url: '/page132',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnTrabajoSocial.html',
        controller: 'licEnTrabajoSocialCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnCriminalStica', {
    url: '/page133',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnCriminalStica.html',
        controller: 'licEnCriminalSticaCtrl'
      }
    }
  })

  .state('gUAUNLaR.procuraciN', {
    url: '/page134',
    views: {
      'side-menu21': {
        templateUrl: 'templates/procuraciN.html',
        controller: 'procuraciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.tCEnGestiNJurDica', {
    url: '/page135',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tCEnGestiNJurDica.html',
        controller: 'tCEnGestiNJurDicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnGestiNYAdminContable', {
    url: '/page136',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnGestiNYAdminContable.html',
        controller: 'tecEnGestiNYAdminContableCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecSubastadorYMartilleroPBlico', {
    url: '/page137',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecSubastadorYMartilleroPBlico.html',
        controller: 'tecSubastadorYMartilleroPBlicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecDeTasadorYCorredorInmobiliario', {
    url: '/page138',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecDeTasadorYCorredorInmobiliario.html',
        controller: 'tecDeTasadorYCorredorInmobiliarioCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnSeguridadUrbana', {
    url: '/page139',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnSeguridadUrbana.html',
        controller: 'tecEnSeguridadUrbanaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnTurismoEcolGico', {
    url: '/page140',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnTurismoEcolGico.html',
        controller: 'licEnTurismoEcolGicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnComSocialParaElDesarrollo', {
    url: '/page141',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnComSocialParaElDesarrollo.html',
        controller: 'tecEnComSocialParaElDesarrolloCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecTCnicoEnTelevisiNDigital', {
    url: '/page142',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecTCnicoEnTelevisiNDigital.html',
        controller: 'tecTCnicoEnTelevisiNDigitalCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnGuADeTurismo', {
    url: '/page127',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnGuADeTurismo.html',
        controller: 'tecEnGuADeTurismoCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnArtesPlSticas', {
    url: '/page143',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnArtesPlSticas.html',
        controller: 'licEnArtesPlSticasCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnArteEscNico', {
    url: '/page144',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnArteEscNico.html',
        controller: 'licEnArteEscNicoCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnLetras', {
    url: '/page148',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnLetras.html',
        controller: 'licEnLetrasCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnHistoria', {
    url: '/page145',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnHistoria.html',
        controller: 'licEnHistoriaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnMSica', {
    url: '/page146',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnMSica.html',
        controller: 'licEnMSicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnLenguaYLiteraturaInglesa', {
    url: '/page147',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnLenguaYLiteraturaInglesa.html',
        controller: 'licEnLenguaYLiteraturaInglesaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnLenguaYLiteraturaPortuguesa', {
    url: '/page165',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnLenguaYLiteraturaPortuguesa.html',
        controller: 'licEnLenguaYLiteraturaPortuguesaCtrl'
      }
    }
  })

  .state('gUAUNLaR.menciNCanto', {
    url: '/page149',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menciNCanto.html',
        controller: 'menciNCantoCtrl'
      }
    }
  })

  .state('gUAUNLaR.menciNComposiciN', {
    url: '/page151',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menciNComposiciN.html',
        controller: 'menciNComposiciNCtrl'
      }
    }
  })

  .state('gUAUNLaR.menciNDirecciNCoral', {
    url: '/page152',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menciNDirecciNCoral.html',
        controller: 'menciNDirecciNCoralCtrl'
      }
    }
  })

  .state('gUAUNLaR.menciNInstrumentoDeOrquestaPianoOGuitarra', {
    url: '/page150',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menciNInstrumentoDeOrquestaPianoOGuitarra.html',
        controller: 'menciNInstrumentoDeOrquestaPianoOGuitarraCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnTeologAYReligionesComparadas', {
    url: '/page153',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnTeologAYReligionesComparadas.html',
        controller: 'licEnTeologAYReligionesComparadasCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnPsicopedagogA', {
    url: '/page154',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnPsicopedagogA.html',
        controller: 'licEnPsicopedagogACtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnGestiNOrganizacionalYRRHH', {
    url: '/page155',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnGestiNOrganizacionalYRRHH.html',
        controller: 'licEnGestiNOrganizacionalYRRHHCtrl'
      }
    }
  })

  .state('gUAUNLaR.tradEnLenguaInglesa', {
    url: '/page156',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tradEnLenguaInglesa.html',
        controller: 'tradEnLenguaInglesaCtrl'
      }
    }
  })

  .state('gUAUNLaR.profEnHistoria', {
    url: '/page157',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profEnHistoria.html',
        controller: 'profEnHistoriaCtrl'
      }
    }
  })

  .state('gUAUNLaR.profEnLetras', {
    url: '/page162',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profEnLetras.html',
        controller: 'profEnLetrasCtrl'
      }
    }
  })

  .state('gUAUNLaR.profEnArtesPlSticas', {
    url: '/page159',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profEnArtesPlSticas.html',
        controller: 'profEnArtesPlSticasCtrl'
      }
    }
  })

  .state('gUAUNLaR.profEnPsicopedagogA', {
    url: '/page160',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profEnPsicopedagogA.html',
        controller: 'profEnPsicopedagogACtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnBibliotecologA', {
    url: '/page161',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnBibliotecologA.html',
        controller: 'tecEnBibliotecologACtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnAdminDeDocYArchivos', {
    url: '/page163',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnAdminDeDocYArchivos.html',
        controller: 'tecEnAdminDeDocYArchivosCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnMuseologA', {
    url: '/page164',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnMuseologA.html',
        controller: 'tecEnMuseologACtrl'
      }
    }
  })

  .state('gUAUNLaR.ingDeRecursosNaturalesRenovables', {
    url: '/page158',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingDeRecursosNaturalesRenovables.html',
        controller: 'ingDeRecursosNaturalesRenovablesCtrl'
      }
    }
  })

  .state('gUAUNLaR.veterinaria', {
    url: '/page166',
    views: {
      'side-menu21': {
        templateUrl: 'templates/veterinaria.html',
        controller: 'veterinariaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnGestiNYAdminRural', {
    url: '/page167',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnGestiNYAdminRural.html',
        controller: 'tecEnGestiNYAdminRuralCtrl'
      }
    }
  })

  .state('gUAUNLaR.ingAgropecuaria', {
    url: '/page168',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ingAgropecuaria.html',
        controller: 'ingAgropecuariaCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnGestiNDeEmpresaAgrColas', {
    url: '/page169',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnGestiNDeEmpresaAgrColas.html',
        controller: 'tecEnGestiNDeEmpresaAgrColasCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnGestiNDeEmpresaPecuaria', {
    url: '/page170',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnGestiNDeEmpresaPecuaria.html',
        controller: 'tecEnGestiNDeEmpresaPecuariaCtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnHidrogeologA', {
    url: '/page171',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnHidrogeologA.html',
        controller: 'licEnHidrogeologACtrl'
      }
    }
  })

  .state('gUAUNLaR.licEnProducciNVegetal', {
    url: '/page172',
    views: {
      'side-menu21': {
        templateUrl: 'templates/licEnProducciNVegetal.html',
        controller: 'licEnProducciNVegetalCtrl'
      }
    }
  })

  .state('gUAUNLaR.tecEnTecnologADeAlimentos', {
    url: '/page173',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tecEnTecnologADeAlimentos.html',
        controller: 'tecEnTecnologADeAlimentosCtrl'
      }
    }
  })

  .state('gUAUNLaR.profDeEducaciNFSica', {
    url: '/page174',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profDeEducaciNFSica.html',
        controller: 'profDeEducaciNFSicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.profDeMatemTica', {
    url: '/page175',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profDeMatemTica.html',
        controller: 'profDeMatemTicaCtrl'
      }
    }
  })

  .state('gUAUNLaR.profDeNivelSuperiorEnBiologA', {
    url: '/page176',
    views: {
      'side-menu21': {
        templateUrl: 'templates/profDeNivelSuperiorEnBiologA.html',
        controller: 'profDeNivelSuperiorEnBiologACtrl'
      }
    }
  })

  .state('gUAUNLaR.noticias', {
    url: '/page178',
    views: {
      'side-menu21': {
        templateUrl: 'templates/noticias.html',
        controller: 'noticiasCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});