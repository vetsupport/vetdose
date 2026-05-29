const SEED_DRUGS = [
  { id: 'acepromazina', generic: 'Acepromazina', trade: 'PromAce', conc: 10, doseMin: 0.01, doseMax: 0.05, dosePref: 0.02, unit: 'mg/kg', route: 'IM, SQ, IV, PO', category: 'sedation', formType: 'injection', calcMode: 'standard', notes: 'No reversible; hipotensión. Evitar en pacientes inestables.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'adequan_polisulfato_de_glicosaminoglicano', generic: 'Adequan (Polisulfato de glicosaminoglicano)', trade: 'Adequan Canine', conc: 100, doseMin: 4.4, doseMax: 4.4, dosePref: 4.4, unit: 'mg/kg', route: 'IM', category: 'joint/disease-modifying', formType: 'injection', calcMode: 'standard', notes: 'Perros: protocolo label 2 veces/semana hasta 4 semanas. Gatos: uso extra-label, validar.', source: 'Plumb 2024; Papich 2020', frequency: '2x/semana x4sem, luego mensual', frequencies: ['2x/semana', 'mensual'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'alfaxalona', generic: 'Alfaxalona', trade: 'Alfaxan', conc: 10, doseMin: 1.0, doseMax: 4.0, dosePref: 2.0, unit: 'mg/kg', route: 'IV, IM', category: 'anesthesia', formType: 'injection', calcMode: 'standard', notes: 'Titular a efecto; buen perfil cardiorrespiratorio.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'alprazolam', generic: 'Alprazolam', trade: 'Xanax', conc: 0.25, tabSizes: [0.25, 0.5, 1.0, 2.0], doseMin: 0.01, doseMax: 0.1, dosePref: 0.02, unit: 'mg/kg', route: 'PO', category: 'behavior', formType: 'tablet', calcMode: 'standard', notes: 'Ansiedad/pánico; riesgo desinhibición/sedación. Dosis por especie/indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'aluminum_hydroxide', generic: 'Aluminum Hydroxide', trade: 'Alternagel/Amphojel', conc: 300, tabSizes: [300, 600], doseMin: 30.0, doseMax: 90.0, dosePref: 45.0, unit: 'mg/kg', route: 'PO', category: 'renal/phosphate binder', formType: 'tablet', calcMode: 'standard', notes: 'Quelante de fósforo; dosis basada en fósforo sérico y dieta. Puede causar constipación.', source: 'Plumb 2024; Papich 2020', frequency: 'BID con comida', frequencies: ['BID con comida', 'TID con comida'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'amantadina', generic: 'Amantadina', trade: 'Symmetrel', conc: 10, doseMin: 3.0, doseMax: 5.0, dosePref: 3.0, unit: 'mg/kg', route: 'PO', category: 'analgesic/neurologic', formType: 'liquid_oral', calcMode: 'standard', notes: 'Antagonista NMDA; usar como adyuvante en dolor crónico. Ajustar en renal.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'amlodipino', generic: 'Amlodipino', trade: 'Norvasc', conc: 2.5, tabSizes: [2.5, 5, 10], doseDog: 0.1, doseCat: 0.0, doseMin: 0.1, doseMax: 0.5, dosePref: 0.1, unit: 'mg/kg', route: 'PO', category: 'cardiac/antihypertensive', formType: 'tablet', calcMode: 'standard', notes: 'Gatos: muy usado para hipertensión; dosis puede ser mg/gato.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'amoxicilina_clavulanato', generic: 'Amoxicilina-Clavulanato', trade: 'Clavamox', conc: 62.5, doseMin: 12.5, doseMax: 25, tabSizes: [62.5, 125, 250, 375], dosePref: 12.5, unit: 'mg/kg', route: 'PO, SQ, IM', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Tabletas: 62.5, 125, 250, 375 mg. Suspensión oral: 62.5 mg/mL. Dosis depende de infección. Diferenciar formulación oral vs inyectable.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
    { id: 'atenolol', generic: 'Atenolol', trade: 'Tenormin', conc: 25, tabSizes: [25,50,100], doseMin: 0.2, doseMax: 2.5, dosePref: 0.5, unit: 'mg/kg', doseDog: 0.5, doseCat: 1.0, route: 'PO', category: 'cardiac', formType: 'tablet', calcMode: 'standard', notes: 'Dosis muy distinta por especie/indicación; gatos HCM suelen mg/gato, no solo mg/kg.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'atipamezole', generic: 'Atipamezole', trade: 'Antisedan', conc: 5, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'same volume/mg based', route: 'IM', category: 'reversal', formType: 'injection', calcMode: 'fixed', notes: 'Reversor alfa-2; dosis depende de dex/medetomidina usada. No calcular como mg/kg estándar.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'atropina', generic: 'Atropina', trade: 'Atropina', conc: 0.54, doseMin: 0.02, doseMax: 0.04, dosePref: 0.02, unit: 'mg/kg', route: 'IV, IM, IT', category: 'emergency', formType: 'injection', calcMode: 'standard', notes: 'Bradicardia sintomática, organofosforados, PCR.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'azitromicina', generic: 'Azitromicina', trade: 'Zithromax', conc: 250, tabSizes: [250], doseMin: 5.0, doseMax: 10.0, dosePref: 10.0, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Dosis/frecuencia varía por indicación; uso extra-label en gatos/perros.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'benazepril', generic: 'Benazepril', trade: 'Fortekor/Lotensin', conc: 5, tabSizes: [5,10,20], doseMin: 0.25, doseMax: 0.5, dosePref: 0.25, unit: 'mg/kg', route: 'PO', category: 'cardiac/renal', formType: 'tablet', calcMode: 'standard', notes: 'IECA; proteinuria/ICC. Monitor renal/K+.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'buprenorfina', generic: 'Buprenorfina', trade: 'Buprenex', conc: 0.3, doseMin: 0.005, doseMax: 0.02, dosePref: 0.01, unit: 'mg/kg', route: 'IV, IM, SQ, transmucosal', category: 'analgesic', formType: 'injection', calcMode: 'standard', notes: 'Gatos: transmucosal muy utilizada; dosis/frecuencia puede diferir.', source: 'Plumb 2024; Papich 2020', frequency: 'q6h', frequencies: ['q6h', 'q8h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'butorfanol', generic: 'Butorfanol', trade: 'Torbugesic', conc: 10, doseMin: 0.2, doseMax: 0.4, dosePref: 0.3, unit: 'mg/kg', route: 'SQ, IV, IM', category: 'analgesic/sedation', formType: 'injection', calcMode: 'standard', notes: 'Analgesia leve-moderada; duración corta 1-2 h.', source: 'Plumb 2024; Papich 2020', frequency: 'q4h', frequencies: ['q4h', 'q6h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cardalis_benazepril_espironolactona', generic: 'Cardalis (benazepril/espironolactona)', trade: 'Cardalis', conc: 2.5, tabSizes: [2.5, 5, 10], doseMin: 0.25, doseMax: 2.0, dosePref: 1.0, unit: 'mg/kg component-based', route: 'PO', category: 'cardiac', formType: 'tablet', calcMode: 'fixed', notes: 'Solo perros. Dosis por tabletas según peso; componentes objetivo: benazepril aprox 0.25 mg/kg + espironolactona aprox 2 mg/kg SID.', source: 'FDA/EMA label; Plumb 2024', frequency: 'SID con comida', frequencies: ['SID con comida'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cefalexina', generic: 'Cefalexina', trade: 'Keflex/Rilexine', conc: 250, tabSizes: [250,500], doseMin: 22.0, doseMax: 30.0, dosePref: 22.0, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'capsule', calcMode: 'standard', notes: 'Pioderma: duración moderna debe individualizarse y favorecer tópicos/cultivo.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cefazolina', generic: 'Cefazolina', trade: 'Ancef', conc: 100, doseMin: 20.0, doseMax: 22.0, dosePref: 22.0, unit: 'mg/kg', route: 'IV, IM', category: 'antibiotic', formType: 'injection', calcMode: 'standard', notes: 'Profilaxis quirúrgica; repetir según duración cirugía.', source: 'Plumb 2024; Papich 2020', frequency: 'q8h', frequencies: ['q6h', 'q8h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cefovecin', generic: 'Cefovecin', trade: 'Convenia', conc: 80.0, doseMin: 8.0, doseMax: 8.0, dosePref: 8.0, unit: 'mg/kg', route: 'SQ', category: 'antibiotic', formType: 'injection', calcMode: 'standard', notes: 'Duración ~14 días (actividad hasta 7-14 días). No requiere dosificación diaria. Perros y gatos. Excelente compliance. No usar en infecciones graves o resistentes.', source: 'Plumb 2024; FDA label', frequency: '14d', frequencies: ['14d'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cefpodoxime', generic: 'Cefpodoxime', trade: 'Simplicef', conc: 100.0, tabSizes: [100,200], doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Cefalosporina de 3ra generación oral. Perros: pioderma, IU, heridas. Gatos: uso off-label. SID o BID según indicación. Muy buena compliance.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cianocobalamina_vitamina_b12', generic: 'Cianocobalamina (Vitamina B12)', trade: 'Vitamin B12', conc: 1.0, doseMin: 250.0, doseMax: 1500.0, dosePref: 1000.0, unit: 'mcg/animal', route: 'SQ, IM', category: 'vitamin/GI', formType: 'injection', calcMode: 'fixed', notes: 'Dosis por tamaño/especie y deficiencia; gatos frecuentemente 250 mcg/gato semanal inicialmente.', source: 'Plumb 2024; Papich 2020', frequency: 'semanal', frequencies: ['semanal', 'mensual'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'ciclosporina_oftalmica', generic: 'Ciclosporina oftálmica', trade: 'Optimmune/Restasis/compounded', conc: 1.0, doseMin: 1.0, doseMax: 2.0, dosePref: 1.0, unit: 'gota/aplicación', route: 'oftálmica', category: 'ophthalmic', formType: 'injection', calcMode: 'fixed', notes: 'KCS: aplicar q12h común; concentración/frecuencia según producto y respuesta.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'ciclosporina_oral', generic: 'Ciclosporina oral', trade: 'Atopica/Neoral', conc: 10, tabSizes: [10, 25, 50, 100], doseMin: 5.0, doseMax: 7.0, dosePref: 5.0, unit: 'mg/kg', route: 'PO', category: 'dermatology/immunosuppressive', formType: 'capsule', calcMode: 'standard', notes: 'Perros DAC: 5 mg/kg SID inicial. Gatos: dosis puede diferir según enfermedad; monitorear GI/infecciones. Cápsulas guardadas en congelador producen menos efectos GI. Presentaciones: 10, 25, 50, 100 mg cápsulas.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'clindamicina', generic: 'Clindamicina', trade: 'Antirobe', conc: 25, tabSizes: [25, 75, 150], doseMin: 5.5, doseMax: 11.0, dosePref: 5.5, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'capsule', calcMode: 'standard', notes: 'Cápsulas: 25, 75, 150 mg. Suspensión oral: 25 mg/mL (disponible como magistral). Tejidos blandos, dental, hueso; también toxoplasmosis a protocolos distintos.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID','TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'clonidine', generic: 'Clonidine', trade: 'Catapres', conc: 0.1, tabSizes: [0.1,0.2,0.3], doseMin: 0.005, doseMax: 0.02, dosePref: 0.01, unit: 'mg/kg', route: 'PO', category: 'behavior/cardiovascular', formType: 'tablet', calcMode: 'standard', notes: 'Adyuvante ansiedad/hiperarousal; puede causar hipotensión/bradicardia.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'clopidogrel', generic: 'Clopidogrel', trade: 'Plavix', conc: 75, tabSizes: [75], doseMin: 2.0, doseMax: 10.0, dosePref: 2.0, unit: 'mg/kg', doseDog: 2.0, doseCat: 0.0, route: 'PO', category: 'antiplatelet', formType: 'tablet', calcMode: 'standard', notes: 'Perros: dosis de carga 10 mg/kg PO, luego 2–3 mg/kg SID. Gatos: 18.75 mg/gato (1/4 comprimido de 75 mg) SID. Gatos frecuentemente 18.75 mg/gato SID; perros puede usarse mg/kg. Nota crítica por especie/indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'darbepoetina_alfa', generic: 'Darbepoetina alfa', trade: 'Aranesp', conc: 0.5, doseMin: 0.45, doseMax: 1.0, dosePref: 0.45, unit: 'mcg/kg', route: 'SQ', category: 'renal/hematologic', formType: 'injection', calcMode: 'standard', notes: 'Anemia por ERC; monitorear PCV, presión, hierro. Dosis en mcg/kg, no mg/kg.', source: 'Plumb 2024; Papich 2020', frequency: 'semanal', frequencies: ['semanal', 'quincenal'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'deracoxib', generic: 'Deracoxib', trade: 'Deramaxx', conc: 12, tabSizes: [12, 25, 75, 100], doseMin: 1.0, doseMax: 2.0, dosePref: 1.0, unit: 'mg/kg', route: 'PO', category: 'nsaid', formType: 'tablet', calcMode: 'standard', notes: 'Solo perros; dosis difiere analgesia vs postquirúrgico.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'desoxicorticosterona_pivalato', generic: 'Desoxicorticosterona pivalato', trade: 'Zycortal/DOCP', conc: 25, doseMin: 2.2, doseMax: 2.2, dosePref: 2.2, unit: 'mg/kg', route: 'IM, SQ', category: 'endocrine', formType: 'injection', calcMode: 'standard', notes: 'Addison; repetir aprox cada 25-30 días, ajustar por electrolitos.', source: 'Plumb 2024; Papich 2020', frequency: '25d', frequencies: ['25d'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dexametasona', generic: 'Dexametasona', trade: 'Azium/Dex-SP', conc: 2, doseMin: 0.1, doseMax: 0.5, dosePref: 0.2, unit: 'mg/kg', route: 'IV, IM, SQ', category: 'emergency/steroid', formType: 'injection', calcMode: 'standard', notes: 'Antiinflamatorio; dosis inmunosupresora/choque varía por indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dexmedetomidina', generic: 'Dexmedetomidina', trade: 'Dexdomitor', conc: 0.5, doseMin: 5.0, doseMax: 20.0, dosePref: 10.0, unit: 'mcg/kg', route: 'IM, IV lento', category: 'sedation', formType: 'injection', calcMode: 'standard', notes: 'Reversible con atipamezole. Bradicardia frecuente; dosis varía mucho por protocolo.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dextrosa_5_en_agua', generic: 'Dextrosa 5% en agua', trade: 'D5W', conc: 1, doseMin: 10.0, doseMax: 20.0, dosePref: 10.0, unit: 'mL/kg', route: 'IV', category: 'fluid', formType: 'injection', calcMode: 'standard', notes: 'NO usar SQ. Indicado en hipernatremia y como fuente de carbohidratos con solución electrolítica. Puede causar hiponatremia, hipocloremia, hipopotasemia e hipomagnesemia. No usar como fluido de reposición aislado; agua libre.', source: 'Plumb 2024; Papich 2020', frequency: 'según CRI', frequencies: ['según CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dextrosa_50', generic: 'Dextrosa 50%', trade: 'Dextrose 50%', conc: 1.0, doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'g/kg', route: 'IV diluida', category: 'emergency', formType: 'injection', calcMode: 'fixed', notes: 'Hipoglucemia; diluir antes de administrar periférico.', source: 'Plumb 2024; Papich 2020', frequency: 'única/PRN', frequencies: ['única', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'diazepam', generic: 'Diazepam', trade: 'Valium', conc: 5, doseMin: 0.2, doseMax: 0.5, dosePref: 0.3, unit: 'mg/kg', route: 'IV, PO', category: 'sedation/anticonvulsant', formType: 'injection', calcMode: 'standard', notes: 'GATOS: EVITAR — puede causar falla hepática idiosincrática fatal. No IM. Gatos: evitar uso oral repetido por riesgo idiosincrático hepático.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'difenhidramina', generic: 'Difenhidramina', trade: 'Benadryl', conc: 50, doseMin: 1.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg', route: 'IV lento, IM, PO', category: 'emergency/antihistamine', formType: 'injection', calcMode: 'standard', notes: 'Anafilaxia/reacciones alérgicas; IV lento por hipotensión.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'digoxina', generic: 'Digoxina', trade: 'Lanoxin', conc: 0.0625, tabSizes: [0.0625,0.125,0.25], doseMin: 0.003, doseMax: 0.01, dosePref: 0.005, unit: 'mg/kg', route: 'PO', category: 'cardiac', formType: 'tablet', calcMode: 'standard', notes: 'Índice terapéutico estrecho; dosificar por peso magro y monitorear niveles.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'diltiazem', generic: 'Diltiazem', trade: 'Cardizem', conc: 30, tabSizes: [30,60,90,120], doseMin: 1.0, doseMax: 2.5, dosePref: 1.5, unit: 'mg/kg', route: 'PO, IV lento', category: 'cardiac', formType: 'tablet', calcMode: 'standard', notes: 'Frecuencia y formulación IR/ER cambian la dosis. Gatos HCM: validar protocolo.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dolasetron', generic: 'Dolasetron', trade: 'Anzemet', conc: 50, doseMin: 0.6, doseMax: 0.6, dosePref: 0.6, unit: 'mg/kg', route: 'IV, PO', category: 'antiemetic', formType: 'injection', calcMode: 'standard', notes: 'Alternativa a ondansetrón; revisar disponibilidad.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dopamina', generic: 'Dopamina', trade: 'Intropin', conc: 40, doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mcg/kg/min', route: 'IV CRI', category: 'emergency/vasopressor', formType: 'injection', calcMode: 'fixed', notes: 'Soporte hemodinámico; titular a presión/perfusión.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI', frequencies: ['CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'doxiciclina', generic: 'Doxiciclina', trade: 'Vibramycin', conc: 50, tabSizes: [50,100], doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Gatos: administrar con agua/comida para evitar esofagitis/estenosis. Dosis según indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dramamine_dimenhidrinato', generic: 'Dramamine (Dimenhidrinato)', trade: 'Dramamine', conc: 50, tabSizes: [50], doseMin: 2.0, doseMax: 8.0, dosePref: 4.0, unit: 'mg/kg', route: 'PO, IM', category: 'antiemetic/vestibular', formType: 'tablet', calcMode: 'standard', notes: 'Antihistamínico para cinetosis/vestibular; puede sedar. Gatos: usar con cautela.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'enalapril', generic: 'Enalapril', trade: 'Enacard/Vasotec', conc: 2.5, tabSizes: [2.5,5,10,20], doseMin: 0.25, doseMax: 0.5, dosePref: 0.25, unit: 'mg/kg', route: 'PO', category: 'cardiac/renal', formType: 'tablet', calcMode: 'standard', notes: 'Perros: BID. Gatos: SID. IECA; monitorear creatinina, K+, presión.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'enrofloxacino', generic: 'Enrofloxacino', trade: 'Baytril', conc: 22.7, tabSizes: [22.7,68,136], doseMin: 5.0, doseMax: 20.0, dosePref: 5.0, unit: 'mg/kg', route: 'PO, SQ, IV lento', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Gatos: no exceder 5 mg/kg/día por riesgo retinal. Evitar cachorros.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'epinefrina', generic: 'Epinefrina', trade: 'Epinephrine', conc: 1, doseMin: 0.01, doseMax: 0.01, dosePref: 0.01, unit: 'mg/kg', route: 'IV, IT', category: 'emergency', formType: 'injection', calcMode: 'standard', notes: 'PCR: diluir para IV. Anafilaxia puede tener protocolos distintos.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'esomeprazole', generic: 'Esomeprazole', trade: 'Nexium', conc: 20, tabSizes: [20,40], doseMin: 0.5, doseMax: 1.0, dosePref: 1.0, unit: 'mg/kg', route: 'PO', category: 'GI/PPI', formType: 'capsule', calcMode: 'standard', notes: 'IBP; evidencia veterinaria menor que omeprazol/pantoprazol.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'espironolactona', generic: 'Espironolactona', trade: 'Aldactone', conc: 25, tabSizes: [25,50,100], doseMin: 1.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'cardiac/diuretic', formType: 'tablet', calcMode: 'standard', notes: 'Diurético ahorrador K+. Usar con IECA requiere monitoreo K+/renal.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'euthaphen_pentobarbital_fenitoina', generic: 'Euthaphen (pentobarbital/fenitoína)', trade: 'Euthaphen', conc: 1.0, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'mL/10 lb label', route: 'IV, IC (inconsciente/anestesiado)', category: 'euthanasia', formType: 'injection', calcMode: 'fixed', notes: 'Uso exclusivo eutanasia. Dosis por label y regulación; no usar en calculadora terapéutica regular.', source: 'FDA label/product label; Plumb 2024', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'famciclovir', generic: 'Famciclovir', trade: 'Famvir', conc: 125, tabSizes: [125,250], doseMin: 40.0, doseMax: 90.0, dosePref: 40.0, unit: 'mg/kg', route: 'PO', category: 'antiviral', formType: 'tablet', calcMode: 'standard', notes: 'Principalmente gatos (herpesvirus); frecuencia variable. Validar protocolo actualizado.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'famotidina', generic: 'Famotidina', trade: 'Pepcid', conc: 10, tabSizes: [10,20], doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'mg/kg', route: 'IV, SQ, PO', category: 'GI/H2 blocker', formType: 'tablet', calcMode: 'standard', notes: 'Reducir en enfermedad renal; taquifilaxia con uso repetido.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fenbendazol', generic: 'Fenbendazol', trade: 'Panacur', conc: 100, doseMin: 50.0, doseMax: 50.0, dosePref: 50.0, unit: 'mg/kg', route: 'PO', category: 'antiparasitic', formType: 'liquid_oral', calcMode: 'standard', notes: 'Nematodos/Giardia; duración varía por parásito.', source: 'Plumb 2024; Papich 2020', frequency: 'SID x3d', frequencies: ['SID x3d'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fenobarbital', generic: 'Fenobarbital', trade: 'Luminal', conc: 15, tabSizes: [15,30,60,100], doseMin: 2.0, doseMax: 5.0, dosePref: 2.5, unit: 'mg/kg', route: 'PO, IV lento', category: 'neurologic/anticonvulsant', formType: 'tablet', calcMode: 'standard', notes: 'Monitorear niveles séricos y función hepática.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fentanilo', generic: 'Fentanilo', trade: 'Duragesic/Sublimaze', conc: 0.05, doseMin: 2.0, doseMax: 5.0, dosePref: 3.0, unit: 'mcg/kg/h', route: 'IV CRI, parche', category: 'analgesic', formType: 'injection', calcMode: 'fixed', notes: 'CRI requiere monitoreo; parches tienen inicio lento y variabilidad.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI/PRN', frequencies: ['CRI', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'finasteride', generic: 'Finasteride', trade: 'Proscar', conc: 1, tabSizes: [1,5], doseMin: 0.1, doseMax: 0.5, dosePref: 0.1, unit: 'mg/kg', route: 'PO', category: 'urogenital', formType: 'tablet', calcMode: 'standard', notes: 'Hiperplasia prostática benigna; teratogénico, manipular con precaución.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fluconazol', generic: 'Fluconazol', trade: 'Diflucan', conc: 50, tabSizes: [50,100,150,200], doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mg/kg', route: 'IV, PO', category: 'antifungal', formType: 'tablet', calcMode: 'standard', notes: 'Penetra SNC/ojos; ajustar en enfermedad renal.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fludrocortisona', generic: 'Fludrocortisona', trade: 'Florinef', conc: 0.1, tabSizes: [0.1], doseMin: 0.01, doseMax: 0.02, dosePref: 0.01, unit: 'mg/kg', route: 'PO', category: 'endocrine', formType: 'tablet', calcMode: 'standard', notes: 'Addison; mineralocorticoide + efecto glucocorticoide.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'furosemida', generic: 'Furosemida', trade: 'Lasix', conc: 50, doseMin: 2.0, doseMax: 4.0, dosePref: 2.0, unit: 'mg/kg', route: 'IV, IM, SQ, PO', category: 'cardiac/diuretic', formType: 'injection', calcMode: 'standard', notes: 'Dosis depende de edema pulmonar agudo vs mantenimiento; monitorear renal/electrolitos.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'gabapentina', generic: 'Gabapentina', trade: 'Neurontin', conc: 100, tabSizes: [100,300,600], doseMin: 5.0, doseMax: 20.0, dosePref: 10.0, unit: 'mg/kg', route: 'PO', category: 'analgesic/neurologic', formType: 'capsule', calcMode: 'standard', notes: 'Dolor neuropático/ansiedad; sedación. Ajustar en enfermedad renal.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'gentamicina', generic: 'Gentamicina', trade: 'Gentocin', conc: 50, doseMin: 6.0, doseMax: 9.0, dosePref: 6.0, unit: 'mg/kg', route: 'IV, IM, SQ', category: 'antibiotic', formType: 'injection', calcMode: 'standard', notes: 'Nefro/ototóxica. Requiere hidratación y monitoreo renal; ideal TDM.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'gluconato_de_calcio', generic: 'Gluconato de calcio', trade: 'Calcium gluconate', conc: 100, doseMin: 50.0, doseMax: 100.0, dosePref: 50.0, unit: 'mg/kg', route: 'IV lento', category: 'emergency/electrolyte', formType: 'injection', calcMode: 'standard', notes: 'ECG durante administración. Hipocalcemia/hiperkalemia.', source: 'Plumb 2024; Papich 2020', frequency: 'única lento', frequencies: ['única lento'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'grapiprant', generic: 'Grapiprant', trade: 'Galliprant', conc: 20, tabSizes: [20,60,100], doseMin: 2.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'nsaid/EP4 antagonist', formType: 'tablet', calcMode: 'standard', notes: 'Solo perros. Dolor osteoartrítico.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'gs441524', generic: 'GS-441524', trade: 'Mutian / Ativinix / otros', conc: 15.0, doseMin: 4.0, doseMax: 20.0, dosePref: 15.0, unit: 'mg/kg', route: 'SQ, PO', category: 'antiviral', formType: 'liquid_oral', calcMode: 'standard', notes: 'FIP felina (Peritonitis Infecciosa Felina). Dosis varía: seca/ocular 4-6 mg/kg SQ SID; neurológica/húmeda 6-12 mg/kg. Protocolo mínimo 42 días (protocolo actual; antes 84 días). Monitorear ALT, proteínas, PCV. Actualmente en proceso de aprobación FDA.', source: 'Pedersen et al. 2019; Risks & Benefits Study 2022; Plumb 2024', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'heparina_no_fraccionada', generic: 'Heparina no fraccionada', trade: 'Heparin', conc: 1000, doseMin: 75.0, doseMax: 200.0, dosePref: 100.0, unit: 'U/kg', route: 'IV, SQ', category: 'anticoagulant', formType: 'injection', calcMode: 'fixed', notes: 'Dosis depende de objetivo anti-Xa/aPTT, bolo vs CRI. Unidad U/kg, no mg/kg.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['BID', 'TID', 'CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'hetastarch', generic: 'Hetastarch', trade: 'Hespan/Voluven', conc: 60, doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mL/kg', route: 'IV', category: 'colloid', formType: 'injection', calcMode: 'standard', notes: 'Coloide; uso actual controvertido por riesgo renal/coagulación.', source: 'Plumb 2024; Papich 2020', frequency: 'bolos PRN', frequencies: ['bolos PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'hidromorfona', generic: 'Hidromorfona', trade: 'Dilaudid', conc: 2, doseMin: 0.1, doseMax: 0.2, dosePref: 0.1, unit: 'mg/kg', route: 'IV, IM, SQ', category: 'analgesic', formType: 'injection', calcMode: 'standard', notes: 'Puede causar vómito/disforia; monitorear respiración.', source: 'Plumb 2024; Papich 2020', frequency: 'q4h', frequencies: ['q4h', 'q6h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'hydrocodone_bitartrate', generic: 'Hydrocodone Bitartrate', trade: 'Hycodan/Tussionex', conc: 1, doseMin: 0.22, doseMax: 0.22, dosePref: 0.22, unit: 'mg/kg', route: 'PO', category: 'antitussive/analgesic', formType: 'liquid_oral', calcMode: 'standard', notes: 'Antitusivo opioide; evitar combinaciones con acetaminofén. Controlado; dosis/frecuencia según indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'insulina_degludec', generic: 'Insulina degludec', trade: 'Tresiba', conc: 100, doseMin: 0.25, doseMax: 1.5, dosePref: 0.5, unit: 'U/kg', route: 'SQ', category: 'endocrine/insulin', formType: 'injection', calcMode: 'fixed', notes: 'Insulina basal en perros; titulación con CGM. Dosis final puede ser mayor; no intercambiar U100/U200 automáticamente.', source: 'Plumb 2024; literatura clínica 2024', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'insulina_glargina_u_100', generic: 'Insulina glargina U-100', trade: 'Lantus/Basaglar/Semglee', conc: 100, doseMin: 0.25, doseMax: 0.5, dosePref: 0.25, unit: 'U/kg', route: 'SQ', category: 'endocrine/insulin', formType: 'injection', calcMode: 'fixed', notes: 'Gatos: uso frecuente; perros casos seleccionados. No mezclar/diluir.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'insulina_glargina_u_300', generic: 'Insulina glargina U-300', trade: 'Toujeo', conc: 300, doseMin: 0.25, doseMax: 0.5, dosePref: 0.25, unit: 'U/kg', route: 'SQ', category: 'endocrine/insulin', formType: 'injection', calcMode: 'fixed', notes: 'Insulina basal; perros/gatos pueden requerir enfoque distinto. Usar pen y CGM para titulación.', source: 'Plumb 2024; literatura clínica 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'insulina_nph', generic: 'Insulina NPH', trade: 'Novolin N/Humulin N', conc: 100, doseMin: 0.25, doseMax: 0.5, dosePref: 0.25, unit: 'U/kg', route: 'SQ', category: 'endocrine/insulin', formType: 'injection', calcMode: 'fixed', notes: 'Perros/gatos: BID frecuente; monitorear glucosa/CGM.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'insulina_regular', generic: 'Insulina regular', trade: 'Humulin R/Novolin R', conc: 100, doseMin: 0.1, doseMax: 0.2, dosePref: 0.1, unit: 'U/kg', route: 'IV, IM, SQ', category: 'endocrine/insulin', formType: 'injection', calcMode: 'fixed', notes: 'DKA/CRI; requiere monitoreo estrecho.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI/PRN', frequencies: ['CRI', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'isoflurano', generic: 'Isoflurano', trade: 'IsoFlo', conc: 1.0, doseMin: 1.5, doseMax: 2.5, dosePref: 2.0, unit: 'MAC/%', route: 'inhalatoria', category: 'anesthesia', formType: 'gas', calcMode: 'fixed', notes: 'Mantenimiento inhalatorio; dosis a efecto según plano anestésico.', source: 'Plumb 2024; Papich 2020', frequency: 'continuo', frequencies: ['continuo'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'itraconazol', generic: 'Itraconazol', trade: 'Sporanox', conc: 100, tabSizes: [100], doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mg/kg', route: 'PO', category: 'antifungal', formType: 'capsule', calcMode: 'standard', notes: 'Dar cápsulas con comida; solución tiene diferente biodisponibilidad. Monitorear hígado.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'ivermectina', generic: 'Ivermectina', trade: 'Ivomec', conc: 10, doseMin: 0.006, doseMax: 0.4, dosePref: 0.2, unit: 'mg/kg', route: 'PO, SQ', category: 'antiparasitic', formType: 'injection', calcMode: 'standard', notes: 'NO en MDR1 sensibles a dosis altas. Dosis varía enormemente por indicación.', source: 'Plumb 2024; Papich 2020', frequency: 'semanal', frequencies: ['semanal', 'mensual'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'ketamina', generic: 'Ketamina', trade: 'Ketavet', conc: 100, doseMin: 5.0, doseMax: 10.0, dosePref: 5.0, unit: 'mg/kg', route: 'IM, IV', category: 'anesthesia/analgesic', formType: 'injection', calcMode: 'standard', notes: 'Combinar con benzodiacepina o alfa-2. Cautela en cardiopatías/hipertensión.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'ketoprofeno', generic: 'Ketoprofeno', trade: 'Ketofen', conc: 10, doseMin: 1.0, doseMax: 2.0, dosePref: 1.0, unit: 'mg/kg', route: 'SQ, IM, IV, PO', category: 'nsaid', formType: 'injection', calcMode: 'standard', notes: 'Uso agudo. No combinar con glucocorticoides; monitorear renal/GI.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'lactato_de_ringer', generic: 'Lactato de Ringer', trade: 'LRS', conc: 1, doseMin: 10.0, doseMax: 20.0, dosePref: 10.0, unit: 'mL/kg', route: 'IV, SQ', category: 'fluid', formType: 'injection', calcMode: 'standard', notes: 'Bolos/reposición según perfusión e hidratación; SQ límites por sitio.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI', frequencies: ['CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'lactulosa', generic: 'Lactulosa', trade: 'Cephulac', conc: 1, doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'mL/kg', route: 'PO', category: 'GI/hepatic', formType: 'liquid_oral', calcMode: 'standard', notes: 'Ajustar para 2-3 deposiciones blandas/día; encefalopatía hepática/constipación.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['BID', 'TID', 'QID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'latanoprost', generic: 'Latanoprost', trade: 'Xalatan', conc: 1.0, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'gota/ojo', route: 'oftálmica', category: 'ophthalmic', formType: 'injection', calcMode: 'fixed', notes: 'Precaución en glaucoma secundario a uveítis o luxación del cristalino. Glaucoma en perros; pobre eficacia en gatos. Usar q12-24h según caso.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'levetiracetam', generic: 'Levetiracetam', trade: 'Keppra', conc: 250, tabSizes: [250,500,750], doseMin: 20.0, doseMax: 60.0, dosePref: 20.0, unit: 'mg/kg', route: 'PO, IV', category: 'neurologic/anticonvulsant', formType: 'tablet', calcMode: 'standard', notes: 'Frecuencia q8h o ER según formulación; ajustar renal.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'levotiroxina', generic: 'Levotiroxina', trade: 'Soloxine/Thyro-Tabs', conc: 0.1, tabSizes: [0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,1.0], doseMin: 0.01, doseMax: 0.02, dosePref: 0.02, unit: 'mg/kg', route: 'PO', category: 'endocrine', formType: 'tablet', calcMode: 'standard', notes: 'Hipotiroidismo canino; ajustar por T4/TSH y signos.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'lidocaina', generic: 'Lidocaína', trade: 'Lidocaine', conc: 20, doseMin: 1.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg', route: 'IV lento', category: 'emergency/antiarrhythmic', formType: 'injection', calcMode: 'standard', notes: 'Perros: arritmias ventriculares. Gatos: evitar/usar dosis muy bajas por toxicidad.', source: 'Plumb 2024; Papich 2020', frequency: 'única/CRI', frequencies: ['única', 'CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'lokivetmab', generic: 'Lokivetmab', trade: 'Cytopoint', conc: 20, doseMin: 1.0, doseMax: 2.0, dosePref: 1.0, unit: 'mg/kg', route: 'SQ', category: 'dermatology/biologic', formType: 'injection', calcMode: 'standard', notes: 'Perros: prurito atópico; efecto 4-8 semanas.', source: 'Plumb 2024; Papich 2020', frequency: 'mensual', frequencies: ['mensual'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'lomustine', generic: 'Lomustine', trade: 'CCNU', conc: 5, tabSizes: [5,10,40,100], doseMin: 60.0, doseMax: 90.0, dosePref: 70.0, unit: 'mg/m²', route: 'PO', category: 'oncology', formType: 'capsule', calcMode: 'fixed', notes: 'NO partir ni abrir cápsulas (oncológico — riesgo exposición). Oncología; dosis mg/m², no mg/kg. Requiere CBC y monitoreo hepático; validar por oncólogo.', source: 'Plumb 2024; Papich 2020', frequency: 'cada 21d', frequencies: ['cada 21d'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'manitol', generic: 'Manitol', trade: 'Osmitrol', conc: 200, doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'g/kg', route: 'IV lento', category: 'emergency/osmotic', formType: 'injection', calcMode: 'fixed', notes: 'Edema cerebral/glaucoma agudo; evitar deshidratación severa.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única', 'PRN'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'marbofloxacino', generic: 'Marbofloxacino', trade: 'Zeniquin', conc: 25, tabSizes: [25,50,100,200], doseMin: 2.75, doseMax: 5.5, dosePref: 2.75, unit: 'mg/kg', route: 'PO', category: 'antibiotic', formType: 'tablet', calcMode: 'standard', notes: 'Fluoroquinolona; usar preferentemente con cultivo. Cuidado en animales jóvenes.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'maropitant', generic: 'Maropitant', trade: 'Cerenia', conc: 10, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'mg/kg', route: 'SQ, IV, PO', category: 'antiemetic', formType: 'injection', calcMode: 'standard', notes: 'Perros: SID. Gatos: uso común a dosis similar; cuidado con edad/peso. IV lento.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'medetomidina', generic: 'Medetomidina', trade: 'Domitor', conc: 1, doseMin: 10.0, doseMax: 40.0, dosePref: 20.0, unit: 'mcg/kg', route: 'IM, IV lento', category: 'sedation', formType: 'injection', calcMode: 'standard', notes: 'Reversible con atipamezole. No confundir mcg/kg con mg/kg.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'megestrol_acetato', generic: 'Megestrol acetato', trade: 'Ovaban', conc: 5, tabSizes: [5,20], doseMin: 2.5, doseMax: 5.0, dosePref: 2.5, unit: 'mg/kg', route: 'PO', category: 'hormonal', formType: 'tablet', calcMode: 'standard', notes: 'Uso muy limitado por efectos adversos importantes.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'melarsomine', generic: 'Melarsomine', trade: 'Immiticide', conc: 50, doseMin: 2.5, doseMax: 2.5, dosePref: 2.5, unit: 'mg/kg', route: 'IM profunda', category: 'antiparasitic/heartworm', formType: 'injection', calcMode: 'standard', notes: 'Solo perros con Dirofilaria; protocolo AHS de 3 dosis preferido. Requiere restricción ejercicio.', source: 'AHS Guidelines 2024; Plumb 2024', frequency: 'protocolo', frequencies: ['protocolo'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'melatonina', generic: 'Melatonina', trade: 'Melatonin', conc: 1.0, tabSizes: [1,3,5,10], doseMin: 1.0, doseMax: 6.0, dosePref: 3.0, unit: 'mg/animal', route: 'PO', category: 'behavior/endocrine', formType: 'tablet', calcMode: 'fixed', notes: '⚠ Verificar que el producto NO contiene Xylitol (tóxico para perros). Dosis por tamaño/indicación; no mg/kg habitual. Validar productos sin xilitol.', source: 'Plumb 2024; Papich 2020', frequency: 'SID noche', frequencies: ['SID noche'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'meloxicam', generic: 'Meloxicam', trade: 'Metacam', conc: 5, doseMin: 0.1, doseMax: 0.2, dosePref: 0.1, unit: 'mg/kg', route: 'SQ, PO', category: 'nsaid', formType: 'injection', calcMode: 'standard', notes: 'Gatos: dosis única o protocolos muy restrictivos; no uso crónico sin criterio. No combinar con esteroides.', source: 'Plumb 2024; Papich 2020', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'metadona', generic: 'Metadona', trade: 'Methadone', conc: 10, doseMin: 0.1, doseMax: 0.5, dosePref: 0.2, unit: 'mg/kg', route: 'IV, IM, SQ', category: 'analgesic', formType: 'injection', calcMode: 'standard', notes: 'Excelente perioperatoria; menor vómito que morfina.', source: 'Plumb 2024; Papich 2020', frequency: 'q4h', frequencies: ['q4h', 'q6h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'metimazol', generic: 'Metimazol', trade: 'Tapazole/Felimazole', conc: 2.5, tabSizes: [2.5,5,10], doseMin: 1.25, doseMax: 2.5, dosePref: 2.5, unit: 'mg/gato', route: 'PO, transdermal', category: 'endocrine', formType: 'tablet', calcMode: 'fixed', notes: 'Gatos: mg/gato, no mg/kg. Monitorear CBC, ALT, T4, renal.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'metocarbamol', generic: 'Metocarbamol', trade: 'Robaxin', conc: 500, tabSizes: [500,750], doseMin: 44.0, doseMax: 220.0, dosePref: 55.0, unit: 'mg/kg', route: 'PO, IV lento', category: 'muscle relaxant/toxicology', formType: 'tablet', calcMode: 'standard', notes: 'Temblor/toxicidad metaldehído; dosis depende severidad. IV lento.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['TID', 'QID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'metoclopramida', generic: 'Metoclopramida', trade: 'Reglan', conc: 5, doseMin: 0.2, doseMax: 0.5, dosePref: 0.3, unit: 'mg/kg', route: 'SQ, IV, IM, PO', category: 'antiemetic/prokinetic', formType: 'injection', calcMode: 'standard', notes: 'No usar en obstrucción/perforación GI. Signos extrapiramidales posibles.', source: 'Plumb 2024; Papich 2020', frequency: 'TID', frequencies: ['TID', 'QID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'metronidazol', generic: 'Metronidazol', trade: 'Flagyl', conc: 250, tabSizes: [250,500], doseMin: 10.0, doseMax: 15.0, dosePref: 10.0, unit: 'mg/kg', route: 'IV, PO', category: 'antibiotic/antiprotozoal', formType: 'tablet', calcMode: 'standard', notes: 'Neurotoxicidad con dosis altas/prolongadas; evitar uso empírico innecesario.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'midazolam', generic: 'Midazolam', trade: 'Versed', conc: 5, doseMin: 0.1, doseMax: 0.3, dosePref: 0.2, unit: 'mg/kg', route: 'IV, IM, IN', category: 'sedation', formType: 'injection', calcMode: 'standard', notes: 'Excitación paradójica si se administra solo, especialmente gatos jóvenes/sanos.', source: 'Plumb 2024; Papich 2020', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'milbemicina_oxima', generic: 'Milbemicina oxima', trade: 'Interceptor', conc: 2.3, tabSizes: [2.3,5.75,11.5,23], doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'mg/kg', route: 'PO', category: 'antiparasitic', formType: 'tablet', calcMode: 'standard', notes: 'Preventivo heartworm y nematodos; productos combinados cambian dosis.', source: 'Plumb 2024; Papich 2020', frequency: 'mensual', frequencies: ['mensual'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'morfina', generic: 'Morfina', trade: 'Morfina', conc: 10, doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'mg/kg', route: 'IM, SQ, IV lento', category: 'analgesic', formType: 'injection', calcMode: 'standard', notes: 'Evitar IV rápido por liberación de histamina.', source: 'Plumb 2024; Papich 2020', frequency: 'q4h', frequencies: ['q4h', 'q6h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'nacl_0_45_dextrosa_2_5', generic: 'NaCl 0.45% + Dextrosa 2.5%', trade: 'Hypotonic saline/dextrose', conc: 1, doseMin: 10.0, doseMax: 20.0, dosePref: 10.0, unit: 'mL/kg', route: 'IV', category: 'fluid', formType: 'injection', calcMode: 'standard', notes: 'Hipernatremia requiere corrección lenta y monitoreo Na.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI', frequencies: ['CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'nacl_0_9', generic: 'NaCl 0.9%', trade: 'Solución salina', conc: 1, doseMin: 10.0, doseMax: 20.0, dosePref: 10.0, unit: 'mL/kg', route: 'IV, SQ', category: 'fluid', formType: 'injection', calcMode: 'standard', notes: 'Útil en hipercalemia/alcalosis; evitar exceso.', source: 'Plumb 2024; Papich 2020', frequency: 'CRI', frequencies: ['CRI'], validationStatus: 'Revisión preliminar; validar por usuario' },

  // ── MOD-014 new drugs ──────────────────────────────────────────────────────
  { id: 'pantoprazol', generic: 'Pantoprazol', trade: 'Protonix', conc: 4, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'mg/kg', route: 'IV lento', category: 'GI/PPI', formType: 'injection', calcMode: 'standard', notes: 'Perros: 1 mg/kg IV. Presentación: vial 40 mg diluido en 10 cc NaCl 0.9% = 4 mg/mL. Administrar IV lentamente. Inhibidor de bomba de protones parenteral.', source: 'Plumb 2024', frequency: 'SID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'esomeprazol_iv', generic: 'Esomeprazol', trade: 'Nexium IV', conc: 4, doseMin: 0.5, doseMax: 1.0, dosePref: 0.5, unit: 'mg/kg', route: 'IV, PO', category: 'GI/PPI', formType: 'injection', calcMode: 'standard', notes: 'Perros: 0.5–1 mg/kg BID. Dosis >1 mg/kg puede causar vómitos y/o diarrea. IBP. Cápsulas orales: 20, 40 mg.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'bario_sulfato', generic: 'Sulfato de Bario', trade: 'Novopaque/E-Z Paque', conc: 1, doseMin: 5.0, doseMax: 20.0, dosePref: 10.0, unit: 'mL/kg', route: 'PO', category: 'other', formType: 'liquid_oral', calcMode: 'standard', notes: 'Estudio tránsito intestinal. Perros <20 kg: 8–12 mL/kg; >20 kg: 5–7 mL/kg. Gatos: 12–20 mL/kg. Radiografías a los 5, 15, 30 min, 1h y 2h. NO usar si hay sospecha de perforación.', source: 'Plumb 2024', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dorzolamida_timolol', generic: 'Dorzolamida/Timolol', trade: 'Cosopt', conc: 1, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'gota/ojo', route: 'Tópico ocular', category: 'ophthalmic', formType: 'injection', calcMode: 'fixed', notes: 'Glaucoma. PRECAUCIÓN: No usar Timolol en pacientes cardíacos (produce bradicardia). NO usar en gatos asmáticos (puede precipitar crisis broncoespástica). 1 gota en ojo afectado BID o TID.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'diltiazem_er', generic: 'Diltiazem ER', trade: 'Cardizem CD/LA', conc: 60, doseMin: 1.0, doseMax: 4.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'cardiac', formType: 'tablet', calcMode: 'standard', tabSizes: [60, 90, 120, 180, 240], doseCat: 0, notes: 'Extended Release — NO partir ni triturar. Perros: 1–4 mg/kg c/12h. Gatos: 30–60 mg/gato c/12–24h (dosis fija). HCM felina y fibrilación auricular. Alternativa c/12h vs IR c/8h.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },

  // ── MOD-012 additions ─────────────────────────────────────────────────────
  { id: 'ampicilina_sulbactam', generic: 'Ampicilina-Sulbactam', trade: 'Unasyn', conc: 30, doseMin: 11.0, doseMax: 22.0, dosePref: 20.0, unit: 'mg/kg', route: 'IV BID', category: 'antibiotic', formType: 'injection', calcMode: 'standard', notes: 'Presentación: vial 1.5 g (1 g ampicilina + 0.5 g sulbactam). Diluir en 50 cc NaCl 0.9% → concentración 30 mg/mL. Administrar BID IV. Espectro amplio incluyendo anaerobios.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'carbonato_lantano', generic: 'Carbonato de Lantano', trade: 'Fosrenol', conc: 250, doseMin: 60.0, doseMax: 90.0, dosePref: 60.0, unit: 'mg/kg', route: 'PO con comida', category: 'renal/phosphate binder', formType: 'tablet', calcMode: 'standard', tabSizes: [250, 500, 750, 1000], notes: 'Quelante de fósforo. Administrar dividido en 2 comidas (BID). Indicado en enfermedad renal crónica con hiperfosfatemia.', source: 'Plumb 2024', frequency: 'BID con comida', frequencies: ['BID con comida', 'TID con comida'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'calcio_carbonato', generic: 'Calcio Carbonato', trade: 'Tums/genérico', conc: 500, doseMin: 90.0, doseMax: 150.0, dosePref: 100.0, unit: 'mg/kg', route: 'PO con comida', category: 'renal/phosphate binder', formType: 'tablet', calcMode: 'standard', tabSizes: [500, 750, 1000], notes: 'Quelante de fósforo. Administrar dividido en 2 comidas. Enfermedad renal crónica con hiperfosfatemia.', source: 'Plumb 2024', frequency: 'BID con comida', frequencies: ['BID con comida', 'TID con comida'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'dexametasona_sp', generic: 'Dexametasona SP', trade: 'Dexafort/Azium SP', conc: 4, doseMin: 0.1, doseMax: 0.5, dosePref: 0.1, unit: 'mg/kg', route: 'IV, IM, SQ', category: 'steroid', formType: 'injection', calcMode: 'standard', notes: 'Anafilaxis: 0.5 mg/kg IV una sola vez. Antiinflamatorio: 0.1–0.2 mg/kg SID. Inmunosupresor: 0.2–0.5 mg/kg SID. Crisis addisoniana: 0.1–0.5 mg/kg IV, mantenimiento <0.1 mg/kg PO PRN. IMPORTANTE: DexSP NO interfiere con la prueba de diagnóstico de Addison (estimulación con ACTH).', source: 'Plumb 2024', frequency: 'única/SID', frequencies: ['única', 'SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  // ── MOD-013 additions ─────────────────────────────────────────────────────
  { id: 'amitriptilina', generic: 'Amitriptilina', trade: 'Elavil', conc: 10, doseMin: 1.0, doseMax: 4.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'behavior', formType: 'tablet', calcMode: 'standard', tabSizes: [10, 25, 50, 75, 100, 150], notes: 'Antidepresivo tricíclico. Ansiedad, dermatitis psicodérmica. Extremadamente amargo — no partir el comprimido, administrar entero. Puede causar sedación, arritmias y efectos anticolinérgicos.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'clomipramina', generic: 'Clomipramina', trade: 'Clomicalm', conc: 5, doseMin: 1.0, doseMax: 4.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'behavior', formType: 'tablet', calcMode: 'standard', tabSizes: [5, 20, 80], notes: 'Clomicalm con sabor a carne — buena aceptación en perros y gatos. Inicio: 1–2 mg/kg c/12h x 2 semanas, luego 3 mg/kg c/24h. Hasta 4 mg/kg para trastorno obsesivo-compulsivo. Aprobado para uso veterinario en muchos países.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'atropina_oftalmica', generic: 'Atropina oftálmica', trade: 'Isopto Atropine', conc: 1, doseMin: 1.0, doseMax: 1.0, dosePref: 1.0, unit: 'gota/ojo', route: 'Tópico ocular', category: 'ophthalmic', formType: 'injection', calcMode: 'fixed', species: 'both', notes: 'Solución oftálmica 1%. Midriasis, cicloplexia, uveítis anterior. 1 gota por ojo afectado. Frecuencia según indicación (SID a TID). Puede causar taquicardia sistémica por absorción.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'carprofen_inj', generic: 'Carprofen inyectable', trade: 'Rimadyl inj.', conc: 50, doseMin: 2.2, doseMax: 4.4, dosePref: 4.4, unit: 'mg/kg', route: 'SQ, IV', category: 'nsaid', formType: 'injection', calcMode: 'standard', species: 'dog', notes: 'Solo perros. Dosis perioperatoria única 4.4 mg/kg SQ antes de cirugía. No usar en gatos. No repetir sin evaluar función renal.', source: 'Plumb 2024; FDA label', frequency: 'única', frequencies: ['única'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'carprofen_tab', generic: 'Carprofen tabletas', trade: 'Rimadyl tabs', conc: 25, doseMin: 2.2, doseMax: 4.4, dosePref: 2.2, unit: 'mg/kg', route: 'PO', category: 'nsaid', formType: 'tablet', calcMode: 'standard', tabSizes: [25, 75, 100], species: 'dog', notes: 'Solo perros. 2.2 mg/kg BID o 4.4 mg/kg SID. Monitorear función hepática en uso crónico (cada 6 meses). No usar en gatos.', source: 'Plumb 2024', frequency: 'BID', frequencies: ['SID', 'BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'cefazolina_peri', generic: 'Cefazolina perioperatoria', trade: 'Ancef', conc: 100, doseMin: 20.0, doseMax: 22.0, dosePref: 22.0, unit: 'mg/kg', route: 'IV', category: 'antibiotic', formType: 'injection', calcMode: 'standard', notes: 'Profilaxis quirúrgica: 20–22 mg/kg IV al inicio de cirugía, repetir c/6h durante procedimiento. Sepsis: 20–22 mg/kg IV c/4–8h. Gram positivos principalmente.', source: 'Plumb 2024', frequency: 'q6h', frequencies: ['q6h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  // ── MOD-005 / MOD-006 additions ──────────────────────────────────────────────
  { id: 'levetiracetam_er', generic: 'Levetiracetam ER', trade: 'Keppra XR', conc: 500, doseMin: 20.0, doseMax: 60.0, dosePref: 30.0, unit: 'mg/kg', route: 'PO', category: 'neurologic/anticonvulsant', formType: 'tablet', calcMode: 'standard', tabSizes: [500, 750], notes: 'Extended Release — administrar c/12h (BID). NO partir ni triturar. Misma dosis total diaria que IR. Disponible en 500 y 750 mg.', source: 'Plumb 2024; Papich 2020', frequency: 'BID', frequencies: ['BID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'fenilpropanolamina', generic: 'Fenilpropanolamina', trade: 'Proin', conc: 25, doseMin: 1.0, doseMax: 2.0, dosePref: 1.5, unit: 'mg/kg', route: 'PO', category: 'urinary', formType: 'tablet', calcMode: 'standard', tabSizes: [25, 50, 75, 100], species: 'dog', notes: 'Solo perros. Incontinencia urinaria por incompetencia del esfínter. c/8-12h. No usar en hipertensión, cardiopatía o hipertiroidismo. Monitorear presión arterial.', source: 'Plumb 2024; FDA label', frequency: 'BID', frequencies: ['BID', 'TID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'capromorelin_dog', generic: 'Capromorelin (perros)', trade: 'Entyce', conc: 30, doseMin: 3.0, doseMax: 3.0, dosePref: 3.0, unit: 'mg/kg', route: 'PO', category: 'GI', formType: 'liquid_oral', calcMode: 'standard', species: 'dog', notes: 'Solo perros ≥ 9 meses. Estimulante del apetito. 30 mg/mL. Con o sin comida. Puede causar hipersalivación o vómito transitorio. NO confundir con Elura (gatos, 20 mg/mL).', source: 'Plumb 2024; FDA label', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'capromorelin_cat', generic: 'Capromorelin (gatos)', trade: 'Elura', conc: 20, doseMin: 2.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg', route: 'PO', category: 'GI', formType: 'liquid_oral', calcMode: 'standard', species: 'cat', notes: 'Solo gatos. Estimulante del apetito. 20 mg/mL. Con o sin comida. Concentración DIFERENTE a Entyce (20 vs 30 mg/mL). No intercambiar entre especies.', source: 'Plumb 2024; FDA label', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'mirtazapina_oral', generic: 'Mirtazapina oral', trade: 'Remeron', conc: 7.5, doseMin: 1.0, doseMax: 3.75, dosePref: 1.88, unit: 'mg/kg', route: 'PO', category: 'GI', formType: 'tablet', calcMode: 'standard', tabSizes: [7.5, 15, 30], notes: 'Estimulante del apetito y antiemético. Perros: 1.88–3.75 mg/perro c/24h. Gatos: 1.88 mg/gato c/48-72h — muy sensibles al síndrome serotoninérgico. Usar dosis mínima en felinos.', source: 'Plumb 2024; Papich 2020', frequency: 'q72h', frequencies: ['q48h', 'q72h'], validationStatus: 'Revisión preliminar; validar por usuario' },
  { id: 'mirataz', generic: 'Mirtazapina tópica', trade: 'Mirataz', conc: 1.88, doseMin: 1.88, doseMax: 1.88, dosePref: 1.88, unit: 'mg/gato', route: 'Tópico auricular', category: 'GI', formType: 'injection', calcMode: 'fixed', species: 'cat', notes: 'Solo gatos. Ungüento 2% — aplicar 1.5 cm en pabellón auricular interno c/24h. Rotar oreja cada aplicación. Usar guantes. Lavar manos. Alternativa cuando la vía oral no es posible.', source: 'Plumb 2024; FDA label', frequency: 'SID', frequencies: ['SID'], validationStatus: 'Revisión preliminar; validar por usuario' },
  // ── MOD-025 new drugs from Papich 5th Ed + FDA labels ──────────────────────

  // Ondansetron
  { id: 'ondansetron', generic: 'Ondansetron', trade: 'Zofran', conc: 2,
    doseMin: 0.1, doseMax: 1.0, dosePref: 0.5, unit: 'mg/kg',
    route: 'IV lento, SQ, PO', category: 'antiemetic', formType: 'injection',
    calcMode: 'standard', tabSizes: [4, 8],
    doseDog: 0.2, doseCat: 0.5,
    frequency: 'q8h', frequencies: ['q8h', 'q12h', 'CRI'],
    notes: 'Perros: 0.1-0.2 mg/kg IV lento q6-12h; oral <10% biodisponibilidad. Gatos: 0.5 mg/kg q8h SQ/IV/PO o 2 mg/gato q8h. CRI: 0.5 mg/kg loading luego 0.5 mg/kg/h. IV en 15-20 min.',
    source: 'Papich 5th Ed. p.672', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Trazodone
  { id: 'trazodone', generic: 'Trazodona', trade: 'Desyrel/genérico', conc: 50,
    doseMin: 5.0, doseMax: 10.0, dosePref: 7.0, unit: 'mg/kg',
    route: 'PO', category: 'behavior', formType: 'tablet',
    calcMode: 'standard', tabSizes: [50, 100, 150],
    doseDog: 7.0, doseCat: 0.0,
    frequency: 'q12h', frequencies: ['SID', 'q12h', 'q8h', 'PRN'],
    notes: 'Perros: 5-8 mg/kg q12h PO, titular. Dar 1h antes del evento estresante. Máx 300 mg/dosis. Gatos: 50-100 mg/gato PO PRN; pico sedación ~2h. NO IV en perros. Precaución con SSRIs, clomipramina, tramadol (serotonina).',
    source: 'Papich 5th Ed. p.927', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Tramadol
  { id: 'tramadol', generic: 'Tramadol', trade: 'Ultram/genérico', conc: 50,
    doseMin: 2.0, doseMax: 5.0, dosePref: 5.0, unit: 'mg/kg',
    route: 'PO', category: 'analgesic', formType: 'capsule',
    calcMode: 'standard', tabSizes: [50],
    doseDog: 5.0, doseCat: 2.0,
    frequency: 'q8h', frequencies: ['q8h', 'q12h'],
    notes: 'Perros: 5 mg/kg q6-8h PO; eficacia analgésica variable. Gatos: 2-4 mg/kg q8-12h PO; producen más metabolito activo. Controlado Schedule IV. No mezclar con IMAO.',
    source: 'Papich 5th Ed. p.922', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Pimobendan
  { id: 'pimobendan', generic: 'Pimobendan', trade: 'Vetmedin', conc: 1.25,
    doseMin: 0.1, doseMax: 0.3, dosePref: 0.25, unit: 'mg/kg',
    route: 'PO', category: 'cardiac', formType: 'tablet',
    calcMode: 'standard', tabSizes: [1.25, 2.5, 5],
    doseDog: 0.25, doseCat: 0.0,
    frequency: 'BID', frequencies: ['BID'],
    notes: 'Perros: 0.25-0.3 mg/kg q12h PO. DAR 30-60 MIN ANTES DE COMER. ICC por DCM y MVD. Gatos (no aprobado): 1.25 mg/gato q12h. No usar en cardiomiopatía hipertrófica obstructiva. No compuestos (absorción diferente).',
    source: 'Papich 5th Ed. p.738', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Robenacoxib
  { id: 'robenacoxib', generic: 'Robenacoxib', trade: 'Onsior', conc: 6,
    doseMin: 1.0, doseMax: 2.0, dosePref: 2.0, unit: 'mg/kg',
    route: 'PO, SQ', category: 'nsaid', formType: 'tablet',
    calcMode: 'standard', tabSizes: [6, 20],
    doseDog: 2.0, doseCat: 1.0,
    frequency: 'SID', frequencies: ['SID'],
    notes: 'Perros: 2 mg/kg PO o SQ q24h. Gatos: 1 mg/kg PO SID o 2 mg/kg SQ x 3 días. GATOS: dar SIN comida (absorción oral 49% en ayunas vs 10% con comida). Inyectable 30 min antes de cirugía. No combinar con otros AINEs o corticoides.',
    source: 'Papich 5th Ed. p.821', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Telmisartan
  { id: 'telmisartan', generic: 'Telmisartán', trade: 'Semintra', conc: 4,
    doseMin: 1.0, doseMax: 3.0, dosePref: 1.5, unit: 'mg/kg',
    route: 'PO', category: 'cardiac/renal', formType: 'liquid_oral',
    calcMode: 'standard',
    doseDog: 1.0, doseCat: 1.5,
    frequency: 'SID', frequencies: ['SID', 'BID'],
    notes: 'Gatos: 1.5 mg/kg q12h x 14 días, luego 2 mg/kg SID. 0.2 mL/kg de solución 4 mg/mL. Ajustar por TA. Perros: 1 mg/kg SID, aumentar hasta 3 mg/kg. HTA y proteinuria en ERC. Preferido sobre IECA en gatos.',
    source: 'Papich 5th Ed. p.876', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Pregabalin (Bonqat en gatos)
  { id: 'pregabalina', generic: 'Pregabalina', trade: 'Bonqat/Lyrica', conc: 75,
    doseMin: 2.0, doseMax: 5.0, dosePref: 2.0, unit: 'mg/kg',
    route: 'PO', category: 'analgesic', formType: 'liquid_oral',
    calcMode: 'standard',
    doseDog: 4.0, doseCat: 2.0,
    frequency: 'BID', frequencies: ['BID', 'TID'],
    notes: 'Perros: anticonvulsivante 2 mg/kg q8h PO; dolor neuropático 4-5 mg/kg q12h. Gatos: 2 mg/kg q12h, aumentar a 4 mg/kg q12h. Bonqat = solución oral 75 mg/mL aprobada FDA 2023 para ansiedad en gatos. Sedación y ataxia posibles. No suspender abruptamente.',
    source: 'Papich 5th Ed. p.775; FDA Bonqat label 2023', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Molidustat
  { id: 'molidustat', generic: 'Molidustat', trade: 'Varenzin-CA1', conc: 5,
    doseMin: 5.0, doseMax: 5.0, dosePref: 5.0, unit: 'mg/kg',
    route: 'PO', category: 'renal/hematologic', formType: 'liquid_oral',
    calcMode: 'standard', species: 'cat',
    frequency: 'SID', frequencies: ['SID'],
    notes: 'SOLO GATOS. Anemia no regenerativa por ERC. 5 mg/kg PO SID. Agitar bien, dar directamente en boca con jeringa provista (NO mezclar con comida). Pausa ≥7 días entre ciclos según HCT. Monitorear HCT semanal. Aprobación condicional FDA 2024 (Elanco).',
    source: 'FDA Varenzin-CA1 label; JVIM 2024;38:197', validationStatus: 'Revisión preliminar; validar por usuario' },

  // Panoquell (Fuzapladib)
  { id: 'fuzapladib', generic: 'Fuzapladib sódico', trade: 'Panoquell-CA1', conc: 4,
    doseMin: 0.4, doseMax: 0.4, dosePref: 0.4, unit: 'mg/kg',
    route: 'IV', category: 'GI', formType: 'injection',
    calcMode: 'standard', species: 'dog',
    frequency: 'SID x3d', frequencies: ['SID x3d'],
    notes: 'SOLO PERROS. Pancreatitis aguda canina. 0.4 mg/kg (0.1 mL/kg) IV SID x 3 días consecutivos. Solo hospitalización. Polvo liofilizado: reconstituir con 3.5 mL diluyente → 4 mg/mL. Vial estable 28 días refrigerado. Usar junto a cuidado de soporte. CI: cardiopatía, falla hepática/renal, cachorros <6 meses.',
    source: 'FDA NADA 141-567; Ceva/ISK label 2022', validationStatus: 'Revisión preliminar; validar por usuario' },


];

// ─── TABLET SIZES MAP ────────────────────────────────────────────────────────
// Available tablet strengths per drug id (mg). Used for smart rounding.
const TABLET_SIZES = {
  levotiroxina:        [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1.0],
  fenobarbital:        [15, 30, 60, 100],
  atenolol:            [25, 50, 100],
  enalapril:           [2.5, 5, 10, 20],
  benazepril:          [5, 10, 20],
  amlodipino:          [2.5, 5, 10],
  espironolactona:     [25, 50, 100],
  diltiazem:           [30, 60, 90, 120],
  digoxina:            [0.0625, 0.125, 0.25],
  metronidazol:        [250, 500],
  doxiciclina:         [50, 100],
  fluconazol:          [50, 100, 150, 200],
  fludrocortisona:     [0.1],
  alprazolam:          [0.25, 0.5, 1.0, 2.0],
  metimazol:           [2.5, 5, 10],
  levetiracetam:       [250, 500, 750],
  levetiracetam_er:    [500, 750],
  clopidogrel:         [75],
  grapiprant:          [20, 60, 100],
  deracoxib:           [12, 25, 75, 100],
  cefpodoxime:         [100, 200],
  marbofloxacino:      [25, 50, 100, 200],
  enrofloxacino:       [22.7, 68, 136],
  mirtazapina_oral:    [7.5, 15, 30],
  fenilpropanolamina:  [25, 50, 75, 100],
  amitriptilina:       [10, 25, 50, 75, 100, 150],
  clomipramina:        [5, 20, 80],
  carbonato_lantano:   [250, 500, 750, 1000],
  calcio_carbonato:    [500, 750, 1000],
  carprofen_tab:       [25, 75, 100],
  clindamicina:        [25, 75, 150],
  cefalexina:          [250, 500],
  diltiazem_er:        [60, 90, 120, 180, 240],
  lomustine:           [5, 10, 40, 100],
  melatonina:          [1, 3, 5, 10],
  metocarbamol:        [500, 750],
  milbemicina_oxima:   [2.3, 5.75, 11.5, 23],

  amoxicilina_clavulanato:     [62.5, 125, 250, 375],
  ciclosporina_oral:           [10, 25, 50, 100],

  cardalis_benazepril_espironolactona:[2.5, 5, 10],

};

// Smart tablet rounding: minimize number of units, prefer larger sizes
// Only whole or half tablets. Capsules: whole only.
function smartTabletOptions(totalMg, drugId, formType, tabSizesOverride) {
  // Use passed tabSizes first (from drug object), then TABLET_SIZES map
  const sizes = tabSizesOverride || TABLET_SIZES[drugId] || null;
  const sorted = sizes ? [...sizes].sort((a,b) => a-b) : null;

  if (formType === 'capsule') {
    if (!sorted) return [`${Math.max(1, Math.round(totalMg))} cáps.`];
    for (const s of [...sorted].reverse()) {
      if (s >= totalMg*0.75 && s <= totalMg*1.35) return [`1 cáps. ${s}mg`];
    }
    for (const s of [...sorted].reverse()) {
      if (s*2 >= totalMg*0.85 && s*2 <= totalMg*1.20) return [`2 cáps. ${s}mg`];
    }
    const best = sorted.reduce((a,b) => Math.abs(a-totalMg)<Math.abs(b-totalMg)?a:b);
    return [`${Math.max(1,Math.round(totalMg/best))} cáps. ${best}mg`];
  }

  if (!sorted) {
    const r = Math.max(0.5, Math.round(totalMg*2)/2);
    return [`${r} tab.`];
  }

  const opts = [], seen = new Set();
  const add = (label, units, diff) => { if (!seen.has(label)) { seen.add(label); opts.push({label, units, diff}); }};

  for (const s of [...sorted].reverse()) {
    const p = n => Math.abs(s*n-totalMg)/totalMg;
    if (p(1)   <= 0.20) add(`1 tab. ${s}mg`,    1,   p(1));
    if (p(0.5) <= 0.20) add(`½ tab. ${s}mg`,    0.5, p(0.5));
    if (p(1.5) <= 0.15) add(`1½ tab. ${s}mg`,   1.5, p(1.5));
    if (p(2)   <= 0.15) add(`2 tab. ${s}mg`,    2,   p(2));
  }

  if (opts.length === 0) {
    const up = sorted.find(s => s >= totalMg*0.65) || sorted[sorted.length-1];
    return [`1 tab. ${up}mg`];
  }

  opts.sort((a,b) => a.units!==b.units ? a.units-b.units : a.diff-b.diff);
  const top = [];
  for (const o of opts) { if (!top.find(t=>t.label===o.label)) top.push(o); if (top.length>=2) break; }
  return top.map(o => o.label);
}

// ─── WEIGHT-BASED TABLE DRUGS ─────────────────────────────────────────────────
// Format: { id, generic, trade, species: ['dog','cat'], rows: [{minLb, maxLb, result}] }
const TABLE_DRUGS = [
  // ── APOQUEL (Oclacitinib) ── Zoetis label verified ──────────────────────────
  {
    id: 'apoquel_table', generic: 'Oclacitinib (tabla)', trade: 'Apoquel',
    species: ['dog'], category: 'dermatology/JAK inhibitor',
    notes: 'Solo perros ≥ 12 meses y ≥ 6.6 lb. Fase aguda: c/12h x 14 días, luego c/24h. Con o sin comida.',
    rows: [
      { minLb: 6.6,  maxLb: 9.9,  result: '3.6 mg — 1 tab. 3.6 mg' },
      { minLb: 10.0, maxLb: 14.9, result: '5.4 mg — 1 tab. 5.4 mg' },
      { minLb: 15.0, maxLb: 19.9, result: '5.4 mg — 1 tab. 5.4 mg' },
      { minLb: 20.0, maxLb: 29.9, result: '16 mg — 1 tab. 16 mg' },
      { minLb: 30.0, maxLb: 44.9, result: '16 mg — 1 tab. 16 mg' },
      { minLb: 45.0, maxLb: 59.9, result: '16 mg — 1.5 comprimidos 16 mg' },
      { minLb: 60.0, maxLb: 89.9, result: '16 mg — 2 tab. 16 mg' },
      { minLb: 90.0, maxLb: 130,  result: '16 mg — 3 tab. 16 mg' },
    ]
  },

  // ── CYTOPOINT (Lokivetmab) ── Zoetis label: 2 mg/kg mínimo, viales 10/20/30/40 mg ──
  // Tabla oficial US: calcular mg = 2mg/kg x peso, elegir vial(es) que cubran esa dosis
  {
    id: 'cytopoint_table', generic: 'Lokivetmab (tabla)', trade: 'Cytopoint',
    species: ['dog'], category: 'dermatology/biologic',
    notes: 'Solo perros. Dosis mínima 2 mg/kg SQ. Viales de uso único: 10, 20, 30, 40 mg. Combinar viales en la misma jeringa para dosis mayores. Repetir c/4-8 semanas según respuesta. Refrigerar.',
    rows: [
      { minLb: 0,    maxLb: 9.9,  result: '< 10 lb → 1 vial 10 mg SQ' },
      { minLb: 10,   maxLb: 19.9, result: '10–<20 lb → 1 vial 20 mg SQ' },
      { minLb: 20,   maxLb: 29.9, result: '20–<30 lb → 1 vial 30 mg SQ' },
      { minLb: 30,   maxLb: 39.9, result: '30–<40 lb → 1 vial 40 mg SQ' },
      { minLb: 40,   maxLb: 49.9, result: '40–<50 lb → 1 vial 40 mg + 1 vial 10 mg SQ' },
      { minLb: 50,   maxLb: 59.9, result: '50–<60 lb → 1 vial 40 mg + 1 vial 20 mg SQ' },
      { minLb: 60,   maxLb: 69.9, result: '60–<70 lb → 1 vial 40 mg + 1 vial 30 mg SQ' },
      { minLb: 70,   maxLb: 79.9, result: '70–<80 lb → 2 viales 40 mg SQ' },
      { minLb: 80,   maxLb: 89.9, result: '80–<90 lb → 2 viales 40 mg + 1 vial 10 mg SQ' },
      { minLb: 90,   maxLb: 99.9, result: '90–<100 lb → 2 viales 40 mg + 1 vial 20 mg SQ' },
      { minLb: 100,  maxLb: 109.9,result: '100–<110 lb → 2 viales 40 mg + 1 vial 30 mg SQ' },
      { minLb: 110,  maxLb: 999,  result: '≥ 110 lb → 3 viales 40 mg SQ' },
    ]
  },

  // ── SIMPARICA (Sarolaner) ── Zoetis label verificado ───────────────────────
  {
    id: 'simparica_table', generic: 'Sarolaner (tabla)', trade: 'Simparica',
    species: ['dog'], category: 'antiparasitic',
    notes: 'Solo perros ≥ 6 meses y ≥ 2.8 lb. Mensual. Pulgas y 6 tipos de garrapatas. Con o sin comida.',
    rows: [
      { minLb: 2.8,  maxLb: 5.5,  result: '2.8–5.5 lb → 1 tab. 5 mg — Amarilla' },
      { minLb: 5.6,  maxLb: 11.0, result: '5.6–11 lb → 1 tab. 10 mg — Morada' },
      { minLb: 11.1, maxLb: 22.0, result: '11.1–22 lb → 1 tab. 20 mg — Naranja' },
      { minLb: 22.1, maxLb: 44.0, result: '22.1–44 lb → 1 tab. 40 mg — Azul' },
      { minLb: 44.1, maxLb: 88.0, result: '44.1–88 lb → 1 tab. 80 mg — Verde' },
      { minLb: 88.1, maxLb: 132,  result: '88.1–132 lb → 1 tab. 120 mg — Café' },
    ]
  },

  // ── SIMPARICA TRIO ── Zoetis label verificado ───────────────────────────────
  {
    id: 'simparica_trio_table', generic: 'Sarolaner/Moxidectina/Pirantel (tabla)', trade: 'Simparica Trio',
    species: ['dog'], category: 'antiparasitic/heartworm',
    notes: 'Solo perros ≥ 8 semanas y ≥ 2.8 lb. Mensual. Heartworm, pulgas, 6 tipos garrapatas, Ancylostoma, Toxocara. Usar con precaución en perros con historia de convulsiones.',
    rows: [
      { minLb: 2.8,  maxLb: 5.5,  result: '2.8–5.5 lb → 1 tab. (3/0.06/12.5 mg Caja Dorada' },
      { minLb: 5.6,  maxLb: 11.0, result: '5.6–11 lb → 1 tab. (6/0.12/25 mg Caja Morada' },
      { minLb: 11.1, maxLb: 22.0, result: '11.1–22 lb → 1 tab. (12/0.24/50 mg Caja Caramelo' },
      { minLb: 22.1, maxLb: 44.0, result: '22.1–44 lb → 1 tab. (24/0.48/100 mg Caja Teal' },
      { minLb: 44.1, maxLb: 88.0, result: '44.1–88 lb → 1 tab. (48/0.96/200 mg Caja Verde' },
      { minLb: 88.1, maxLb: 132,  result: '88.1–132 lb → 1 tab. (72/1.44/300 mg Caja Café' },
    ]
  },

  // ── TRIFEXIS (Spinosad/Milbemicina) ── Elanco label ────────────────────────
  {
    id: 'trifexis_table', generic: 'Spinosad/Milbemicina (tabla)', trade: 'Trifexis',
    species: ['dog'], category: 'antiparasitic/heartworm',
    notes: 'Solo perros ≥ 8 semanas y ≥ 5 lb. Mensual CON COMIDA (reduce vómito). Heartworm, pulgas, Ancylostoma, Toxocara, Trichuris.',
    rows: [
      { minLb: 5.0,  maxLb: 10.0, result: '5–10 lb → 1 tab. 140/2.3 mg (Magenta' },
      { minLb: 10.1, maxLb: 20.0, result: '10.1–20 lb → 1 tab. 270/4.5 mg (Azul' },
      { minLb: 20.1, maxLb: 40.0, result: '20.1–40 lb → 1 tab. 560/9.3 mg (Verde' },
      { minLb: 40.1, maxLb: 60.0, result: '40.1–60 lb → 1 tab. 810/13.5 mg (Naranja' },
      { minLb: 60.1, maxLb: 120,  result: '60.1–120 lb → 1 tab. 1620/27 mg (Café' },
    ]
  },

  // ── CERENIA TABS (Maropitant) ── Zoetis label ───────────────────────────────
  {
    id: 'cerenia_tab_table', generic: 'Maropitant tabletas (tabla)', trade: 'Cerenia tabs',
    species: ['dog', 'cat'], category: 'antiemetic',
    notes: 'Perros y gatos ≥ 16 semanas. DAR CON COMIDA para reducir hipersalivación. Vómito agudo: 1 dosis/día x 5 días. Cinetosis: dar 2h antes del viaje.',
    rows: [
      { minLb: 4.4,  maxLb: 8.8,  result: '4.4–8.8 lb → 1 tab. 16 mg' },
      { minLb: 8.9,  maxLb: 17.6, result: '8.9–17.6 lb → 1 tab. 24 mg' },
      { minLb: 17.7, maxLb: 33.0, result: '17.7–33 lb → 1 tab. 60 mg' },
      { minLb: 33.1, maxLb: 66.0, result: '33.1–66 lb → 1 tab. 60 mg' },
      { minLb: 66.1, maxLb: 110,  result: '66.1–110 lb → 2 tab. 60 mg' },
    ]
  },

  // ── LIBRELA (Bedinvetmab) ── Zoetis US label: 0.5 mg/kg SQ mensual ──────────
  // Viales: 5, 10, 15, 20, 30 mg/mL (1 mL c/u). Para 5–60 kg: 1 mL del vial correspondiente
  {
    id: 'librela_table', generic: 'Bedinvetmab (tabla)', trade: 'Librela',
    species: ['dog'], category: 'analgesic',
    notes: 'Solo perros. Anti-NGF. Dolor osteoarticular. Dosis: 0.5 mg/kg (0.23 mg/lb) SQ mensual. Administrar contenido completo (1 mL) del vial. Para >60 kg combinar viales. No usar con AINEs a largo plazo. No usar en gestantes/lactantes/reproductores.',
    rows: [
      { minLb: 11.0, maxLb: 22.0, result: '11–22 lb (5–10 kg → 1 mL vial 5 mg SQ' },
      { minLb: 22.1, maxLb: 44.0, result: '22.1–44 lb (10–20 kg → 1 mL vial 10 mg SQ' },
      { minLb: 44.1, maxLb: 66.0, result: '44.1–66 lb (20–30 kg → 1 mL vial 15 mg SQ' },
      { minLb: 66.1, maxLb: 88.0, result: '66.1–88 lb (30–40 kg → 1 mL vial 20 mg SQ' },
      { minLb: 88.1, maxLb: 132,  result: '88.1–132 lb (40–60 kg → 1 mL vial 30 mg SQ' },
      { minLb: 132.1,maxLb: 176,  result: '>132 lb (>60 kg → combinar viales según peso. Consultar tabla Zoetis.' },
    ]
  },

  // ── SOLENSIA (Frunevetmab) ── Zoetis label: 1 mg/kg SQ mensual gatos ────────
  {
    id: 'solensia_table', generic: 'Frunevetmab (tabla)', trade: 'Solensia',
    species: ['cat'], category: 'analgesic',
    notes: 'Solo gatos. Anti-NGF felino. Dolor osteoarticular. Dosis: 1 mg/kg SQ mensual. Administrar contenido completo del vial. No usar en gestantes/lactantes/reproductores.',
    rows: [
      { minLb: 4.4,  maxLb: 8.8,  result: '4.4–8.8 lb (2–4 kg → 1 vial 1 mg SQ' },
      { minLb: 8.9,  maxLb: 13.2, result: '8.9–13.2 lb (4–6 kg → 1 vial 2 mg SQ' },
      { minLb: 13.3, maxLb: 17.6, result: '13.3–17.6 lb (6–8 kg → 1 vial 3 mg SQ' },
      { minLb: 17.7, maxLb: 22.0, result: '17.7–22 lb (8–10 kg → 1 vial 4 mg SQ' },
    ]
  },

  // ── ZENRELIA (Ilunocitinib) ── Zoetis label 2024 ────────────────────────────
  {
    id: 'zenrelia_table', generic: 'Ilunocitinib (tabla)', trade: 'Zenrelia',
    species: ['dog'], category: 'dermatology/JAK inhibitor',
    notes: 'Solo perros ≥ 12 meses. JAK1 inhibidor. Dermatitis atópica. Una vez al día. Comprimidos de 4, 8 y 16 mg.',
    rows: [
      { minLb: 6.6,  maxLb: 11.0, result: '6.6–11 lb → 1 tab. 4 mg SID' },
      { minLb: 11.1, maxLb: 22.0, result: '11.1–22 lb → 1 tab. 8 mg SID' },
      { minLb: 22.1, maxLb: 44.0, result: '22.1–44 lb → 1 tab. 16 mg SID' },
      { minLb: 44.1, maxLb: 88.0, result: '44.1–88 lb → 2 tab. 16 mg SID' },
      { minLb: 88.1, maxLb: 132,  result: '88.1–132 lb → 3 tab. 16 mg SID' },
    ]
  },

  // ── CARDALIS (Benazepril/Espironolactona) ── Ceva label ─────────────────────
  {
    id: 'cardalis_table', generic: 'Benazepril/Espironolactona (tabla)', trade: 'Cardalis',
    species: ['dog'], category: 'cardiac',
    notes: 'Solo perros. ICC. Benazepril (~0.25 mg/kg) + Espironolactona (~2 mg/kg) SID con comida. Presentaciones: Small, Medium, Large.',
    rows: [
      { minLb: 5.5,  maxLb: 11.0, result: '5.5–11 lb → 1 tab. Small (2.5 mg benazepril / 20 mg espironolactona' },
      { minLb: 11.1, maxLb: 22.0, result: '11.1–22 lb → 1 tab. Medium (5 mg benazepril / 40 mg espironolactona' },
      { minLb: 22.1, maxLb: 44.0, result: '22.1–44 lb → 1 tab. Large (10 mg benazepril / 80 mg espironolactona' },
      { minLb: 44.1, maxLb: 88.0, result: '44.1–88 lb → 2 tab. Large (10/80 mg c/u' },
      { minLb: 88.1, maxLb: 132,  result: '88.1–132 lb → 3 tab. Large (10/80 mg c/u' },
    ]
  },

  // ── INTERCEPTOR PLUS (Milbemicina/Praziquantel) ── Elanco label ────────────
  {
    id: 'interceptor_plus_table', generic: 'Milbemicina/Praziquantel (tabla)', trade: 'Interceptor Plus',
    species: ['dog'], category: 'antiparasitic/heartworm',
    notes: 'Solo perros. Mensual. Heartworm + tenias (Taenia, Echinococcus). Con o sin comida.',
    rows: [
      { minLb: 2.0,  maxLb: 8.0,  result: '2–8 lb → 1 tab. (2.3 mg / 22.8 mg' },
      { minLb: 8.1,  maxLb: 25.0, result: '8.1–25 lb → 1 tab. (5.75 mg / 57 mg' },
      { minLb: 25.1, maxLb: 50.0, result: '25.1–50 lb → 1 tab. (11.5 mg / 114 mg' },
      { minLb: 50.1, maxLb: 100.0,result: '50.1–100 lb → 1 tab. (23 mg / 228 mg' },
    ]
  },
];

// ─── ANTAGONIST MAP ───────────────────────────────────────────────────────────
const ANTAGONISTS = {
  'dexmedetomidina': {
    id: 'atipamezole', name: 'Atipamezole (Antisedan)',
    rule: 'mismo_volumen',
    note: 'Administrar el MISMO VOLUMEN que se usó de dexmedetomidina. Vía IM.',
  },
  'medetomidina': {
    id: 'atipamezole', name: 'Atipamezole (Antisedan)',
    rule: 'mismo_volumen',
    note: 'Administrar el MISMO VOLUMEN que se usó de medetomidina. Vía IM.',
  },
  'xilacina': {
    id: 'atipamezole', name: 'Atipamezole (Antisedan)',
    rule: 'mismo_volumen',
    note: 'Administrar el MISMO VOLUMEN que se usó de xilacina. Vía IM.',
  },
  'morfina': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.01, unit: 'mg/kg',
    note: 'IV o IM. Duración corta — puede necesitar dosis repetidas. Monitorear.',
  },
  'hidromorfona': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.01, unit: 'mg/kg',
    note: 'IV o IM. Reversión parcial si es necesario para preservar algo de analgesia.',
  },
  'butorfanol': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.01, unit: 'mg/kg',
    note: 'IV o IM. Agonista-antagonista — reversión generalmente no necesaria.',
  },
  'buprenorfina': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.04, unit: 'mg/kg',
    note: 'Dosis alta de naloxona necesaria por alta afinidad. Puede requerir infusión.',
  },
  'fentanilo': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.01, unit: 'mg/kg',
    note: 'IV o IM. Duración de naloxona < fentanilo en infusión — monitoreo estricto.',
  },
  'metadona': {
    id: 'naloxona', name: 'Naloxona (Narcan)',
    conc: 0.4, dose: 0.04, unit: 'mg/kg',
    note: 'Metadona dura más que naloxona — monitorear y repetir dosis si necesario.',
  },
  'midazolam': {
    id: 'flumazenil', name: 'Flumazenil (Romazicon)',
    conc: 0.1, dose: 0.01, unit: 'mg/kg',
    note: 'IV lento. Duración corta 30-60 min — paciente puede re-sedarse.',
  },
  'diazepam': {
    id: 'flumazenil', name: 'Flumazenil (Romazicon)',
    conc: 0.1, dose: 0.01, unit: 'mg/kg',
    note: 'IV lento. Diazepam dura más que flumazenil — monitorear.',
  },
  'propofol': {
    id: null, name: 'Sin antagonista específico',
    note: 'Soporte ventilatorio y cardiovascular. No hay reversor para propofol.',
  },
  'ketamina': {
    id: null, name: 'Sin antagonista específico',
    note: 'No hay reversor para ketamina. Manejo de soporte. Dexmed puede ayudar a suavizar emergencia.',
  },
};

// ─── BODY SURFACE AREA (BSA) ──────────────────────────────────────────────────
// m² = K × (weight_kg)^(2/3) / 10000  where K=10.1 for dogs, K=10.0 for cats
function calcBSA(weightKg, species) {
  const K = species === 'cat' ? 10.0 : 10.1;
  return (K * Math.pow(weightKg, 2/3)) / 10000;
}

// ─── STATE ────────────────────────────────────────────────────────────────────
let state = {
  unit: 'lb',
  species: 'dog',
  selectedDrugs: new Set(),
  selectedTableDrugs: new Set(),
  selectedPresentation: {},
  selectedFrequency: {},
  dilVolume: 5,
  editingId: null,
  lastResults: [],
};

// ─── STORAGE ─────────────────────────────────────────────────────────────────
function loadDrugs() {
  try {
    const saved = localStorage.getItem('vetdose_drugs');
    return saved ? JSON.parse(saved) : JSON.parse(JSON.stringify(SEED_DRUGS));
  } catch(e) { return JSON.parse(JSON.stringify(SEED_DRUGS)); }
}
function saveDrugs(drugs) { localStorage.setItem('vetdose_drugs', JSON.stringify(drugs)); }
function getDrugs() { return loadDrugs(); }

// ─── INIT ────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  if (!localStorage.getItem('vetdose_drugs')) {
    saveDrugs(JSON.parse(JSON.stringify(SEED_DRUGS)));
  }
  loadFreqPrefs();
  renderDrugList();
  renderDrugsDB();
  populateCRISelect();
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }
});

// ─── TABS ────────────────────────────────────────────────────────────────────
function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const tabs = ['calc','cri','fluidos','nutricion','drugs'];
  const tabIdx = tabs.indexOf(tab);
  if (tabIdx >= 0) document.querySelectorAll('.tab')[tabIdx].classList.add('active');
  const screen = document.getElementById('screen-' + tab);
  if (screen) screen.classList.add('active');
  if (tab === 'drugs') renderDrugsDB();
  if (tab === 'cri') populateCRISelect();
  if (tab === 'nutricion') populateNutFactors();
}

// ─── SPECIES ─────────────────────────────────────────────────────────────────
function setSpecies(sp) {
  state.species = sp;
  document.getElementById('sp-dog').classList.toggle('active', sp === 'dog');
  document.getElementById('sp-cat').classList.toggle('active', sp === 'cat');
  state.selectedDrugs.clear();
  state.selectedTableDrugs.clear();
  renderDrugList();
}

// ─── UNIT ────────────────────────────────────────────────────────────────────
function setUnit(u) {
  state.unit = u;
  document.getElementById('unit-lb').classList.toggle('active', u === 'lb');
  document.getElementById('unit-kg').classList.toggle('active', u === 'kg');
}
function getWeightKg() {
  const w = parseFloat(document.getElementById('patient-weight').value) || 0;
  return state.unit === 'lb' ? w * 0.453592 : w;
}
function getWeightLb() {
  const w = parseFloat(document.getElementById('patient-weight').value) || 0;
  return state.unit === 'lb' ? w : w * 2.20462;
}

// ─── CATEGORY / SEARCH FILTER ────────────────────────────────────────────────
let activeCategory = 'all';
let searchQuery = '';

function setCategory(cat) {
  activeCategory = cat;
  document.querySelectorAll('.cat-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderDrugList();
}

function onSearchInput(val) {
  searchQuery = val.toLowerCase().trim();
  renderDrugList();
}

// ─── DRUG LIST (calc screen) ──────────────────────────────────────────────────
const CAT_LABELS = {
  antiemetic: 'Antiemético', 'antiemetic/prokinetic': 'Antiemético/Procinético',
  'antiemetic/vestibular': 'Antiemético/Vestibular',
  analgesic: 'Analgésico', 'analgesic/neurologic': 'Analgésico/Neurológico',
  'analgesic/sedation': 'Analgésico/Sedación', 'antitussive/analgesic': 'Antitusivo',
  sedation: 'Sedación', 'sedation/analgesia': 'Sed./Analgesia',
  'sedation/anticonvulsant': 'Sed./Anticonv.',
  anesthesia: 'Anestesia', 'anesthesia/analgesic': 'Anestesia/Analgésico',
  nsaid: 'AINE', 'nsaid/EP4 antagonist': 'AINE/EP4',
  antibiotic: 'Antibiótico', 'antibiotic/antiprotozoal': 'Antibiótico/Antiproz.',
  antifungal: 'Antifúngico', antiviral: 'Antiviral',
  antiprotozoal: 'Antiprotozoario', antiparasitic: 'Antiparasitario',
  'antiparasitic/heartworm': 'Antiparasit./Heartworm',
  anticoagulant: 'Anticoagulante', antiplatelet: 'Antiplaquetario',
  hemostatic: 'Hemostático',
  cardiac: 'Cardíaco', 'cardiac/antihypertensive': 'Cardíaco/Antihipert.',
  'cardiac/diuretic': 'Cardíaco/Diurético', 'cardiac/renal': 'Cardíaco/Renal',
  fluid: 'Fluidos', colloid: 'Coloide', 'blood product': 'Hemoderivado',
  emergency: 'Emergencia', 'emergency/antiarrhythmic': 'Emerg./Antiarrítmico',
  'emergency/antihistamine': 'Emerg./Antihistamínico',
  'emergency/electrolyte': 'Emerg./Electrolito',
  'emergency/osmotic': 'Emerg./Osmótico', 'emergency/reversal': 'Emerg./Reversión',
  'emergency/steroid': 'Emerg./Esteroide', 'emergency/vasopressor': 'Emerg./Vasopresor',
  reversal: 'Reversión',
  endocrine: 'Endocrino', 'endocrine/insulin': 'Insulina',
  steroid: 'Esteroide', hormonal: 'Hormonal',
  'renal/antihypertensive': 'Renal/Antihipert.', 'renal/hematologic': 'Renal/Hematológico',
  'renal/phosphate binder': 'Renal/Fosfato',
  'GI': 'GI', 'GI/PPI': 'GI/IBP', 'GI/H2 blocker': 'GI/Anti-H2',
  'GI/hepatic': 'GI/Hepático', hepatic: 'Hepático',
  neurologic: 'Neurológico', 'neurologic/anticonvulsant': 'Anticonvulsivante',
  'dermatology/JAK inhibitor': 'Derm./JAK', 'dermatology/biologic': 'Derm./Biológico',
  'dermatology/immunosuppressive': 'Derm./Inmunosupr.',
  'dermatology/ophthalmic': 'Derm./Oftálmico', ophthalmic: 'Oftálmico',
  oncology: 'Oncología', behavior: 'Comportamiento',
  'behavior/cardiovascular': 'Comp./Cardiovasc.', 'behavior/endocrine': 'Comp./Endocrino',
  'behavior/sedation': 'Comp./Sedación',
  'joint/disease-modifying': 'Articular/DMOAD',
  'muscle relaxant/toxicology': 'Relajante Muscular',
  toxicology: 'Toxicología', urinary: 'Urinario', urogenital: 'Urogenital',
  'respiratory/dermatology': 'Resp./Derm.',
  'vitamin/GI': 'Vitamina/GI', euthanasia: 'Eutanasia',
  other: 'Otros',
};

const CAT_CLASS = (cat) => {
  if (!cat) return 'cat-other';
  if (cat.startsWith('antiemetic')) return 'cat-antiemetic';
  if (cat.startsWith('analgesic') || cat === 'antitussive/analgesic') return 'cat-analgesic';
  if (cat.startsWith('sedation') || cat.startsWith('anesthesia')) return 'cat-sedation';
  if (cat === 'fluid' || cat === 'colloid' || cat === 'blood product') return 'cat-fluid';
  if (cat.startsWith('emergency') || cat === 'reversal') return 'cat-emergency';
  if (cat.startsWith('antibiotic') || cat === 'antifungal' || cat === 'antiviral' || cat === 'antiprotozoal' || cat.startsWith('antiparasitic')) return 'cat-antibiotic';
  if (cat.startsWith('cardiac') || cat === 'anticoagulant' || cat === 'antiplatelet' || cat === 'hemostatic') return 'cat-cardiac';
  if (cat.startsWith('nsaid')) return 'cat-nsaid';
  if (cat.startsWith('endocrine') || cat === 'hormonal' || cat === 'steroid') return 'cat-endocrine';
  if (cat.startsWith('dermatology') || cat === 'ophthalmic' || cat === 'oncology') return 'cat-derma';
  if (cat.startsWith('GI') || cat === 'hepatic' || cat === 'vitamin/GI') return 'cat-gi';
  if (cat.startsWith('neurologic') || cat.startsWith('behavior')) return 'cat-neuro';
  if (cat.startsWith('renal') || cat === 'urinary' || cat === 'urogenital') return 'cat-renal';
  return 'cat-other';
};

function sortedDrugs(drugs) {
  return [...drugs].sort((a, b) => a.generic.localeCompare(b.generic, 'es', { sensitivity: 'base' }));
}

function doseUnitLabel(d) {
  const ft = d.formType || 'injection';
  const freq = d.frequency ? ` · ${d.frequency}` : '';
  if (ft === 'tablet')      return `${d.dosePref} ${d.unit}${freq} · tab.`;
  if (ft === 'capsule')     return `${d.dosePref} ${d.unit}${freq} · cáps.`;
  if (ft === 'liquid_oral') return `${d.dosePref} ${d.unit}${freq} · oral`;
  return `${d.dosePref} ${d.unit}${freq} · ${d.conc} mg/mL`;
}

function drugMatchesFilter(d) {
  const speciesOk = !d.species || d.species === 'both' ||
    d.species === state.species ||
    (Array.isArray(d.species) && d.species.includes(state.species));
  const catOk = activeCategory === 'all' || d.category === activeCategory ||
    (d.category && d.category.startsWith(activeCategory));
  const searchOk = !searchQuery ||
    d.generic.toLowerCase().includes(searchQuery) ||
    d.trade.toLowerCase().includes(searchQuery);
  return speciesOk && catOk && searchOk;
}

function renderDrugList() {
  const drugs = sortedDrugs(getDrugs()).filter(drugMatchesFilter);

  // Also filter table drugs
  const tableDrugs = TABLE_DRUGS.filter(td => {
    const sp = !td.species || td.species.includes(state.species);
    const cat = activeCategory === 'all' || (td.category && (td.category === activeCategory || td.category.startsWith(activeCategory)));
    const srch = !searchQuery || td.generic.toLowerCase().includes(searchQuery) || td.trade.toLowerCase().includes(searchQuery);
    return sp && cat && srch;
  });

  const container = document.getElementById('drug-list-container');
  let html = '';

  // Table drugs section
  if (tableDrugs.length > 0) {
    html += `<div style="font-size:10px;font-weight:800;color:var(--accent2);letter-spacing:1px;text-transform:uppercase;padding:8px 0 4px">📋 Por tabla de peso</div>`;
    html += tableDrugs.map(td => `
      <div class="drug-item" onclick="toggleTableDrug('${td.id}')">
        <div class="drug-check ${state.selectedTableDrugs.has(td.id) ? 'checked' : ''}" id="check-${td.id}"></div>
        <div class="drug-info">
          <div class="drug-generic">${td.generic}</div>
          <div class="drug-trade">${td.trade}</div>
          <div class="drug-meta" style="color:var(--accent2)">📋 Según tabla de peso del laboratorio</div>
        </div>
        <div class="cat-badge ${CAT_CLASS(td.category)}">${CAT_LABELS[td.category] || td.category}</div>
      </div>`).join('');
    if (drugs.length > 0) html += `<div style="border-top:1px solid var(--border);margin:4px 0"></div>`;
  }

  // Regular drugs
  if (drugs.length > 0) {
    if (tableDrugs.length > 0) html += `<div style="font-size:10px;font-weight:800;color:var(--muted);letter-spacing:1px;text-transform:uppercase;padding:4px 0">💉 Por dosis/peso</div>`;
    html += drugs.map(d => {
      const needsVal = d.validationStatus && d.validationStatus.toLowerCase().includes('validar');
      return `
      <div class="drug-item" onclick="toggleDrug('${d.id}')">
        <div class="drug-check ${state.selectedDrugs.has(d.id) ? 'checked' : ''}" id="check-${d.id}"></div>
        <div class="drug-info">
          <div class="drug-generic">${d.generic}${needsVal ? ' <span style="font-size:10px;color:#b45309">⚠</span>' : ''}</div>
          <div class="drug-trade">${d.trade}</div>
          <div class="drug-meta">${doseUnitLabel(d)}</div>
        </div>
        <div class="cat-badge ${CAT_CLASS(d.category)}">${CAT_LABELS[d.category] || d.category}</div>
      </div>
      ${state.selectedDrugs.has(d.id) && (d.tabSizes?.length > 0 || (d.frequencies && d.frequencies.length > 1)) ? `
        <div id="panel-${d.id}" onclick="event.stopPropagation()">
          ${buildDrugPanel(d)}
        </div>` : ''}
      `;
    }).join('');
  }

  if (!html) html = `<div style="text-align:center;padding:24px;color:var(--muted);font-size:14px">Sin resultados — prueba otra búsqueda</div>`;
  container.innerHTML = html;
}

// ─── SELECTED PRESENTATION & FREQUENCY ───────────────────────────────────────
// Stores user's choice of presentation and frequency per drug
// state.selectedPresentation[drugId] = mg (tablet size chosen)
// state.selectedFrequency[drugId] = 'SID'|'BID'|'TID' etc.

function toggleDrug(id) {
  if (state.selectedDrugs.has(id)) {
    state.selectedDrugs.delete(id);
    delete state.selectedPresentation[id];
    delete state.selectedFrequency[id];
  } else {
    state.selectedDrugs.add(id);
    // Pre-select best presentation and default frequency
    const drugs = getDrugs();
    const d = drugs.find(x => x.id === id);
    if (d) {
      if (d.frequency) state.selectedFrequency[id] = d.frequency;
      if (d.tabSizes && d.tabSizes.length > 0) {
        // Pre-select: find tabSize closest to ideal (1 whole tablet)
        const wkg = getWeightKg();
        if (wkg > 0) {
          const activeDose = state.species==='cat'&&d.doseCat ? d.doseCat
                           : state.species==='dog'&&d.doseDog ? d.doseDog : d.dosePref;
          const totalMg = activeDose * wkg;
          const sizes = d.tabSizes;
          // Find size that gives closest to 1 unit
          let bestSize = sizes[0];
          let bestScore = 999;
          for (const s of sizes) {
            const units = totalMg / s;
            // Prefer 1 unit, then 0.5, then 2
            const score = Math.abs(units - 1) < Math.abs(units - 0.5) ?
              Math.abs(units - 1) : Math.abs(units - 0.5) + 0.5;
            if (score < bestScore) { bestScore = score; bestSize = s; }
          }
          state.selectedPresentation[id] = bestSize;
        } else {
          state.selectedPresentation[id] = d.tabSizes[0];
        }
      }
    }
  }
  const check = document.getElementById('check-' + id);
  if (check) check.classList.toggle('checked', state.selectedDrugs.has(id));
  // Re-render just the drug item to show/hide selector
  renderDrugList();
}

function setPresentation(drugId, size) {
  state.selectedPresentation[drugId] = parseFloat(size);
  updateDrugPanel(drugId);
}

function setFrequency(drugId, freq) {
  state.selectedFrequency[drugId] = freq;
  // Persist preference for next patient
  try {
    const saved = JSON.parse(localStorage.getItem('vetdose_freq_prefs') || '{}');
    saved[drugId] = freq;
    localStorage.setItem('vetdose_freq_prefs', JSON.stringify(saved));
  } catch(e) {}
  updateDrugPanel(drugId);
}

function loadFreqPrefs() {
  try {
    const saved = JSON.parse(localStorage.getItem('vetdose_freq_prefs') || '{}');
    Object.assign(state.selectedFrequency, saved);
  } catch(e) {}
}

function updateDrugPanel(drugId) {
  const panel = document.getElementById(`panel-${drugId}`);
  if (!panel) return;
  const drugs = getDrugs();
  const d = drugs.find(x => x.id === drugId);
  if (!d) return;
  panel.innerHTML = buildDrugPanel(d);
}

function buildDrugPanel(d) {
  const wkg = getWeightKg();
  if (wkg <= 0) return `<div style="font-size:12px;color:var(--muted);padding:6px 0">Ingresa el peso para ver opciones</div>`;

  const activeDose = state.species==='cat'&&d.doseCat ? d.doseCat
                   : state.species==='dog'&&d.doseDog ? d.doseDog : d.dosePref;
  const totalMgMin = d.doseMin * wkg;
  const totalMgMax = d.doseMax * wkg;
  const totalMg = activeDose * wkg;

  let resultText = '';
  let inRange = true;

  const ft = d.formType || 'injection';
  const selectedSize = state.selectedPresentation[d.id];
  const selectedFreq = state.selectedFrequency[d.id] || d.frequency || '';

  if ((ft === 'tablet' || ft === 'capsule') && d.tabSizes && d.tabSizes.length > 0) {
    const useSize = selectedSize || d.tabSizes[0];
    const opts = smartTabletOptions(totalMg, d.id, ft, d.tabSizes);
    const doseReal = ft === 'tablet'
      ? (opts[0].includes('½') ? useSize * 0.5 : (parseFloat(opts[0]) || 1) * useSize)
      : (parseFloat(opts[0]) || 1) * useSize;
    resultText = opts[0];
    inRange = doseReal >= totalMgMin * 0.85 && doseReal <= totalMgMax * 1.15;
  } else if (ft === 'liquid_oral' || d.unit === 'mL/kg') {
    resultText = `${(activeDose * wkg).toFixed(1)} cc`;
  } else if (d.unit === 'mcg/kg') {
    resultText = `${((activeDose/1000*wkg)/d.conc).toFixed(2)} cc`;
  } else if (d.calcMode !== 'fixed') {
    resultText = `${((activeDose*wkg)/d.conc).toFixed(2)} cc`;
    inRange = true;
  } else {
    resultText = `${activeDose} ${d.unit}`;
  }

  // Presentation selector (only for tablets/capsules with multiple sizes)
  let presSelector = '';
  if ((ft === 'tablet' || ft === 'capsule') && d.tabSizes && d.tabSizes.length > 1) {
    const unit = ft === 'tablet' ? 'mg' : 'mg';
    presSelector = `
      <div style="margin-bottom:6px">
        <div style="font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Formulación disponible</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${d.tabSizes.map(s => `
            <label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:4px 8px;border-radius:8px;border:1.5px solid ${selectedSize==s?'var(--accent)':'var(--border)'};background:${selectedSize==s?'var(--accentlt)':'var(--surface2)'};font-size:13px;font-weight:${selectedSize==s?'700':'500'};color:${selectedSize==s?'var(--accent)':'var(--text2)'}">
              <input type="radio" name="pres-${d.id}" value="${s}" ${selectedSize==s?'checked':''} onchange="setPresentation('${d.id}',${s})" style="display:none">
              ${s}mg
            </label>`).join('')}
        </div>
      </div>`;
  }

  // Frequency selector
  let freqSelector = '';
  const freqs = d.frequencies || (d.frequency ? [d.frequency] : []);
  if (freqs.length > 1) {
    freqSelector = `
      <div style="margin-bottom:6px">
        <div style="font-size:10px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.8px;margin-bottom:4px">Frecuencia</div>
        <div style="display:flex;gap:6px;flex-wrap:wrap">
          ${freqs.map(f => `
            <label style="display:flex;align-items:center;gap:4px;cursor:pointer;padding:4px 10px;border-radius:8px;border:1.5px solid ${selectedFreq==f?'var(--accent)':'var(--border)'};background:${selectedFreq==f?'var(--accentlt)':'var(--surface2)'};font-size:13px;font-weight:${selectedFreq==f?'700':'500'};color:${selectedFreq==f?'var(--accent)':'var(--text2)'}">
              <input type="radio" name="freq-${d.id}" value="${f}" ${selectedFreq==f?'checked':''} onchange="setFrequency('${d.id}','${f}')" style="display:none">
              ${f}
            </label>`).join('')}
        </div>
      </div>`;
  }

  const rangeColor = inRange ? 'var(--accent)' : '#b45309';
  const rangeIcon = inRange ? '✓' : '⚠';

  return `
    <div style="background:var(--accentlt);border-radius:10px;padding:10px 12px;margin-top:4px;border:1px solid var(--border2)">
      <div style="font-size:11px;color:var(--muted);margin-bottom:6px">
        <span style="font-weight:700">${d.doseMin}–${d.doseMax} ${d.unit}</span>
        &nbsp;→&nbsp; paciente: <span style="font-weight:700;color:var(--text)">${totalMgMin.toFixed(1)}–${totalMgMax.toFixed(1)} mg</span>
      </div>
      ${presSelector}${freqSelector}
      <div style="display:flex;align-items:center;gap:8px;margin-top:6px;padding-top:6px;border-top:1px solid var(--border)">
        <span style="font-size:14px;font-weight:800;color:${rangeColor}">${rangeIcon} ${resultText}</span>
        ${selectedFreq ? `<span style="font-size:12px;color:var(--muted)">— ${selectedFreq}</span>` : ''}
      </div>
    </div>`;
}

function toggleTableDrug(id) {
  if (state.selectedTableDrugs.has(id)) state.selectedTableDrugs.delete(id);
  else state.selectedTableDrugs.add(id);
  const check = document.getElementById('check-' + id);
  if (check) check.classList.toggle('checked', state.selectedTableDrugs.has(id));
}

// ─── CALCULATE ────────────────────────────────────────────────────────────────
function calculate() {
  const name = document.getElementById('patient-name').value.trim() || 'Paciente';
  const weightKg = getWeightKg();
  const weightLb = getWeightLb();
  const weightRaw = parseFloat(document.getElementById('patient-weight').value) || 0;

  if (weightKg <= 0) { alert('Ingresa el peso del paciente.'); return; }
  if (state.selectedDrugs.size === 0 && state.selectedTableDrugs.size === 0) {
    alert('Selecciona al menos una droga.'); return;
  }

  const drugs = getDrugs();
  const selected = drugs.filter(d => state.selectedDrugs.has(d.id));
  const bsa = calcBSA(weightKg, state.species);

  // Calculate regular drugs
  const results = selected.map(d => {
    const ft = d.formType || 'injection';
    const mode = d.calcMode || 'standard';
    let cc = 0, qty = 0, doseDisplay = '', resultDisplay = null;

    // MOD-004: use species-specific dose if available
    const speciesDose = state.species === 'cat' && d.doseCat ? d.doseCat
                      : state.species === 'dog' && d.doseDog ? d.doseDog
                      : d.dosePref;
    const activeDose = speciesDose;

    // MOD-019: use selected presentation if available
    const selectedSize = state.selectedPresentation[d.id];
    const selectedFreq = state.selectedFrequency[d.id] || d.frequency || '';
    const effectiveConc = selectedSize || d.conc;

    if (d.unit === 'mg/m²') {
      const totalMg = activeDose * bsa;
      cc = d.conc > 0 ? totalMg / d.conc : 0;
      doseDisplay = `${activeDose} mg/m² (BSA: ${bsa.toFixed(3)} m²)`;
    } else if (mode === 'fixed') {
      doseDisplay = `${activeDose} ${d.unit}`;
      resultDisplay = doseDisplay;
    } else if (ft === 'tablet' || ft === 'capsule') {
      const totalMg = activeDose * weightKg;
      qty = effectiveConc > 0 ? totalMg / effectiveConc : 0;
      doseDisplay = `${activeDose} ${d.unit}`;
    } else if (ft === 'liquid_oral' || d.unit === 'mL/kg') {
      cc = activeDose * weightKg;
      doseDisplay = `${activeDose} ${d.unit === 'mL/kg' ? 'mL/kg' : d.unit}`;
    } else if (d.unit === 'mcg/kg') {
      const mgTotal = (activeDose / 1000) * weightKg;
      cc = d.conc > 0 ? mgTotal / d.conc : 0;
      doseDisplay = `${activeDose} mcg/kg`;
    } else {
      cc = d.conc > 0 ? (activeDose * weightKg) / d.conc : 0;
      doseDisplay = `${activeDose} ${d.unit}`;
    }
    const speciesLabel = (state.species === 'cat' && d.doseCat) ? ' 🐈' :
                         (state.species === 'dog' && d.doseDog) ? ' 🐕' : '';
    return { ...d, cc, qty, bsa, doseDisplay: doseDisplay + speciesLabel, resultDisplay,
             formType: ft, _currentDose: activeDose,
             _selectedSize: selectedSize, _selectedFreq: selectedFreq,
             conc: effectiveConc }; // use selected size as effective conc
  });

  // Calculate table drugs
  const tableResults = TABLE_DRUGS
    .filter(td => state.selectedTableDrugs.has(td.id))
    .map(td => {
      const row = td.rows.find(r => weightLb >= r.minLb && weightLb <= r.maxLb);
      return { ...td, tableResult: row ? row.result : `Peso ${weightLb.toFixed(1)} lb fuera de rango de tabla`, isTable: true };
    });

  // Find antagonists
  const antagonistResults = [];
  const antagonistSeen = new Set();
  selected.forEach(d => {
    const key = d.generic.toLowerCase().replace(/\s+/g,'').replace(/-/g,'');
    const match = Object.keys(ANTAGONISTS).find(k => key.includes(k.replace(/\s+/g,'')));
    if (match && !antagonistSeen.has(ANTAGONISTS[match].id || match)) {
      const ant = ANTAGONISTS[match];
      antagonistSeen.add(ant.id || match);
      let antCC = null;
      if (ant.rule === 'mismo_volumen') {
        const parent = results.find(r => r.id === d.id);
        antCC = parent ? parent.cc : null;
      } else if (ant.dose && ant.conc) {
        antCC = (ant.dose * weightKg) / ant.conc;
      }
      antagonistResults.push({ ...ant, parentDrug: d.generic, antCC, weightKg });
    }
  });

  state.lastResults = results;

  const weightKgDisplay = weightKg.toFixed(2);
  const weightLbDisplay = (weightKg * 2.20462).toFixed(1);
  const weightDisplay = state.unit === 'lb'
    ? `${weightRaw} lb · ${weightKgDisplay} kg · BSA ${bsa.toFixed(3)} m²`
    : `${weightRaw} kg · ${weightLbDisplay} lb · BSA ${bsa.toFixed(3)} m²`;
  const speciesIcon = state.species === 'dog' ? '🐕' : '🐈';

  document.getElementById('results-container').innerHTML = `
    <div class="patient-bar">
      <div>
        <div class="patient-bar-name">${speciesIcon} ${name}</div>
        <div style="font-size:12px;color:#a7f3d0;margin-top:3px;font-family:var(--mono)">${weightDisplay}</div>
      </div>
      <div style="text-align:right;font-size:11px;color:#a7f3d0;opacity:.8">${results.length + tableResults.length} droga(s)</div>
    </div>
    ${results.map((r, i) => renderResult(r, i)).join('')}
    ${tableResults.map(r => renderTableResult(r)).join('')}
    ${antagonistResults.length > 0 ? `
      <div style="font-size:11px;font-weight:800;color:#991b1b;letter-spacing:1px;text-transform:uppercase;padding:12px 0 6px">
        🚨 Antagonistas disponibles
      </div>
      ${antagonistResults.map(a => renderAntagonist(a)).join('')}
    ` : ''}
  `;

  document.getElementById('header-patient-info').textContent = `${speciesIcon} ${name} · ${weightDisplay}`;

  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('screen-results').classList.add('active');
}

function renderResult(r, idx) {
  const ft = r.formType || 'injection';
  const mode = r.calcMode || 'standard';
  const isTablet  = ft === 'tablet';
  const isCapsule = ft === 'capsule';
  const isSolid   = isTablet || isCapsule;
  const isFixed   = mode === 'fixed' || r.resultDisplay;
  const needsVal  = r.validationStatus && r.validationStatus.toLowerCase().includes('validar');
  const isBSA     = r.unit === 'mg/m²';

  let mainDisplay, concLabel, concValue, tabOptionsHTML = '';
  if (isFixed) {
    mainDisplay = r.resultDisplay || r.doseDisplay;
    concLabel = 'Unidad'; concValue = r.unit;
  } else if (isBSA) {
    const cc = r.cc || 0;
    mainDisplay = cc < 0.01 ? '< 0.01 cc' : cc.toFixed(2) + ' cc';
    concLabel = 'BSA'; concValue = `${r.bsa.toFixed(3)} m²`;
  } else if (isSolid) {
    const totalMg = r.qty * r.conc; // qty = total tabs before rounding
    const opts = smartTabletOptions(totalMg, r.id, ft, r.tabSizes || null);
    mainDisplay = opts[0]; // primary option
    concLabel = 'Presentación';
    concValue = `${r.conc} mg / ${isTablet ? 'comprimido' : 'cápsula'}`;
    if (opts.length > 1) {
      tabOptionsHTML = `
        <div style="background:#f0fdf4;border:1px solid #86efac;border-radius:8px;padding:8px 12px;margin-top:8px">
          <div style="font-size:11px;font-weight:800;color:var(--accent);margin-bottom:4px">Opciones de dosificación</div>
          ${opts.map((o, i) => `<div style="font-size:13px;font-family:var(--mono);color:var(--text);padding:2px 0">
            <span style="color:var(--muted);font-weight:700">Opción ${String.fromCharCode(65+i)}:</span> ${o}
          </div>`).join('')}
        </div>`;
    }
  } else {
    const cc = r.cc || 0;
    mainDisplay = cc < 0.01 ? '< 0.01 cc' : cc.toFixed(2) + ' cc';
    concLabel = 'Conc. vial'; concValue = `${r.conc} mg/mL`;
  }

  const plumbRange = r.doseMin === r.doseMax
    ? `${r.doseMin} ${r.unit}` : `${r.doseMin}–${r.doseMax} ${r.unit}`;
  const warnHTML = r.notes ? `<div class="warn-note"><span>ℹ</span><span>${r.notes}</span></div>` : '';
  const sourceHTML = r.source ? `<div class="result-row"><div class="result-lbl">Fuente</div><div class="result-val" style="color:var(--muted);font-size:11px">${r.source}</div></div>` : '';
  const valHTML = needsVal
    ? `<div style="background:#f0f6ff;border:1px solid #b8d4f0;border-radius:8px;padding:8px 12px;margin-top:8px;font-size:12px;color:#1a3a6a;display:flex;justify-content:space-between;align-items:center;gap:8px">
        <span>⚠ Pendiente validación clínica</span>
        <button onclick="validateDrug('${r.id}',${idx})" style="background:var(--accent);color:#fff;border:none;border-radius:6px;padding:5px 12px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;flex-shrink:0">✓ Confirmar dosis</button>
       </div>` : '';

  // Dose adjustment - only for standard mg/kg injectable/oral
  const canAdjust = !isFixed && (r.unit === 'mg/kg' || r.unit === 'mcg/kg') && r.doseMin !== r.doseMax;
  const adjustHTML = canAdjust ? `
    <div style="margin-top:10px;background:var(--surface2);border-radius:10px;padding:10px 12px">
      <div style="font-size:11px;font-weight:700;color:var(--muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:.8px">Ajustar dosis (${r.doseMin}–${r.doseMax} ${r.unit})</div>
      <div style="display:flex;align-items:center;gap:8px">
        <input type="number" id="adj-dose-${idx}" value="${r._currentDose}" min="${r.doseMin}" max="${r.doseMax}" step="0.01"
          style="width:90px;background:var(--surface);border:1px solid var(--border);border-radius:8px;padding:8px 10px;font-size:15px;font-family:var(--mono);color:var(--text);outline:none"
          oninput="recalcDose(${idx}, this.value)">
        <span style="font-size:12px;color:var(--muted);flex-shrink:0">${r.unit}</span>
        <button onclick="recalcDose(${idx}, document.getElementById('adj-dose-${idx}').value)"
          style="background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 12px;font-size:13px;font-weight:700;cursor:pointer;white-space:nowrap">Recalcular</button>
        <div id="adj-result-${idx}" style="font-size:14px;color:var(--accent);font-family:var(--mono);font-weight:600;min-width:80px;background:var(--accent-lt);border-radius:8px;padding:8px 10px;text-align:center"></div>
      </div>
    </div>` : '';

  return `
    <div class="result-card" id="result-card-${idx}">
      <div class="result-header">
        <div class="result-names">
          <div class="result-generic">${r.generic}</div>
          <div class="result-trade">${r.trade}</div>
        </div>
        <div class="result-dose" style="font-size:${isSolid||isFixed ? '17px':'24px'}">${mainDisplay}</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Vía</div><div class="route-badge">${r.route}</div></div>
        ${(r._selectedFreq || r.frequency) ? `<div class="result-row"><div class="result-lbl">Frecuencia</div><div class="result-val" style="font-weight:700;color:var(--accent)">${r._selectedFreq || r.frequency}</div></div>` : ''}
        <div class="result-row"><div class="result-lbl">Dosis</div><div class="result-val">${r.doseDisplay} <span style="color:var(--muted);font-size:11px">(${plumbRange})</span></div></div>
        <div class="result-row"><div class="result-lbl">${concLabel}</div><div class="result-val">${concValue}</div></div>
        ${sourceHTML}${warnHTML}${tabOptionsHTML}${valHTML}${adjustHTML}
      </div>
    </div>`;
}

function recalcDose(idx, newDose) {
  const r = state.lastResults[idx];
  if (!r) return;
  const dose = parseFloat(newDose);
  if (isNaN(dose) || dose <= 0) return;
  const weightKg = getWeightKg();
  let newCC = 0, display = '';

  if (r.unit === 'mcg/kg') {
    newCC = ((dose / 1000) * weightKg) / r.conc;
    display = `${dose} mcg/kg → ${newCC.toFixed(2)} cc`;
  } else {
    newCC = (dose * weightKg) / r.conc;
    const ft = r.formType || 'injection';
    if (ft === 'tablet' || ft === 'capsule') {
      const qty = (dose * weightKg) / r.conc;
      display = `${dose} ${r.unit} → ${qty.toFixed(2)} comprimido(s)`;
    } else {
      display = `${dose} ${r.unit} → ${newCC.toFixed(2)} cc`;
    }
  }
  const el = document.getElementById(`adj-result-${idx}`);
  if (el) el.textContent = display;
}

function renderTableResult(r) {
  // Parse result to separate dose from range prefix
  const raw = r.tableResult || '';
  // Remove range prefix like "44.1–66 lb → " or "< 10 lb → "
  const dose = raw.replace(/^[^→]*→\s*/, '').trim();

  return `
    <div class="result-card">
      <div class="result-header" style="background:linear-gradient(135deg,#eff6ff 0%,var(--surface) 100%)">
        <div class="result-names">
          <div class="result-generic">${r.trade}</div>
          <div class="result-trade">${r.generic.replace(' (tabla)','')}</div>
        </div>
        <div class="result-dose" style="font-size:16px;color:#1d4ed8;text-align:right;max-width:160px;line-height:1.3">${dose}</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Vía</div><div class="route-badge" style="color:#1d4ed8;background:#eff6ff;border-color:#bfdbfe">Tabla fabricante</div></div>
        ${r.notes ? `<div class="warn-note"><span>ℹ</span><span>${r.notes}</span></div>` : ''}
      </div>
    </div>`;
}

function renderAntagonist(a) {
  let doseText = '';
  if (a.rule === 'mismo_volumen' && a.antCC !== null) {
    doseText = `${a.antCC.toFixed(2)} cc IM (mismo volumen que ${a.parentDrug})`;
  } else if (a.antCC !== null && a.id) {
    doseText = `${a.antCC.toFixed(2)} cc IV o IM`;
  } else {
    doseText = 'Ver nota clínica';
  }
  const hasAntag = !!a.id;
  return `
    <div class="result-card" style="border-color:${hasAntag ? '#fca5a5':'#e5e7eb'}">
      <div class="result-header" style="background:${hasAntag ? '#fee2e2':'#f9fafb'}">
        <div class="result-names">
          <div class="result-generic" style="color:#991b1b">${a.name}</div>
          <div class="result-trade" style="color:#b45309">↩ Reversor de ${a.parentDrug}</div>
        </div>
        <div class="result-dose" style="font-size:16px;color:#991b1b">${doseText}</div>
      </div>
      <div class="result-body">
        <div class="warn-note" style="background:#fee2e2;border-color:#fca5a5"><span>🚨</span><span>${a.note}</span></div>
      </div>
    </div>`;
}

function backToCalc() {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.tab')[0].classList.add('active');
  document.getElementById('screen-calc').classList.add('active');
}

function shareResults() {
  const name = document.getElementById('patient-name').value.trim() || 'Paciente';
  const weightKg = getWeightKg();
  const weightRaw = parseFloat(document.getElementById('patient-weight').value) || 0;
  const weightDisplay = state.unit === 'lb' ? `${weightRaw} lb (${weightKg.toFixed(1)} kg)` : `${weightRaw} kg`;
  const speciesIcon = state.species === 'dog' ? 'PERRO' : 'GATO';
  const drugs = getDrugs();
  const selected = drugs.filter(d => state.selectedDrugs.has(d.id));
  const today = new Date().toLocaleDateString('es-US', {year:'numeric',month:'long',day:'numeric'});

  let text = '===========================\n';
  text += 'INDICACIONES MEDICAS\n';
  text += '===========================\n';
  text += `Paciente: ${name} (${speciesIcon})\n`;
  text += `Peso: ${weightDisplay}\n`;
  text += `Fecha: ${today}\n`;
  text += '---------------------------\n\n';

  selected.forEach(d => {
    const ft = d.formType || 'injection';
    const isSolid = ft === 'tablet' || ft === 'capsule';
    const icon = ft === 'injection' ? '[INY]' : ft === 'liquid_oral' ? '[LIQ]' : '[TAB]';
    let doseText = '';
    if (d.calcMode === 'fixed') {
      doseText = `${d.dosePref} ${d.unit}`;
    } else if (isSolid) {
      const activeDose = state.species==='cat'&&d.doseCat ? d.doseCat : state.species==='dog'&&d.doseDog ? d.doseDog : d.dosePref;
      const totalMg = activeDose * weightKg;
      const opts = smartTabletOptions(totalMg, d.id, ft, d.tabSizes || null);
      doseText = opts[0];
      if (opts[1]) doseText += ` | Alt: ${opts[1]}`;
    } else if (d.unit === 'mL/kg') {
      doseText = `${(d.dosePref*weightKg).toFixed(1)} cc`;
    } else if (d.unit === 'mcg/kg') {
      doseText = `${((d.dosePref/1000*weightKg)/d.conc).toFixed(2)} cc`;
    } else {
      doseText = `${((d.dosePref*weightKg)/d.conc).toFixed(2)} cc`;
    }
    text += `${icon} ${d.generic.toUpperCase()}\n`;
    text += `    (${d.trade})\n`;
    text += `    DOSIS: ${doseText}\n`;
    text += `    Via: ${d.route}\n`;
    if (d.notes) text += `    NOTA: ${d.notes.slice(0,120)}${d.notes.length>120?'...':''}\n`;
    text += '\n';
  });

  TABLE_DRUGS.filter(td => state.selectedTableDrugs.has(td.id)).forEach(td => {
    const weightLb = getWeightLb();
    const row = td.rows.find(r => weightLb >= r.minLb && weightLb <= r.maxLb);
    const dose = row ? row.result.replace(/^[^\u2192]*\u2192\s*/,'') : 'fuera de rango';
    text += `[TAB] ${td.trade.toUpperCase()}\n`;
    text += `    DOSIS: ${dose}\n\n`;
  });

  text += '---------------------------\n';
  text += 'Regrese o llame si nota:\nvomitos, letargia, falta de\napetito o cualquier cambio\ninusual en su mascota.\n';
  text += '===========================\n';
  text += 'VetDose 2.0';

  if (navigator.share) {
    navigator.share({ title: `Indicaciones - ${name}`, text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text).then(() => alert('Copiado al portapapeles')).catch(() => {
      prompt('Copia este texto:', text);
    });
  }
}

// ─── CRI SCREEN ──────────────────────────────────────────────────────────────
function populateCRISelect() {
  const sel = document.getElementById('cri-drug-select');
  const drugs = getDrugs();
  const current = sel.value;

  // Only drugs clinically appropriate for CRI — injectables/liquids used in continuous infusion
  const CRI_IDS = new Set([
    'fentanilo','morfina','hidromorfona','metadona','butorfanol','buprenorfina',
    'ketamina','dexmedetomidina','medetomidina','lidocaina','propofol',
    'midazolam','diazepam','alfaxalona',
    'dopamina','dobutamina','epinefrina','norepinefrina','vasopresina',
    'maropitant','ondansetron','metoclopramida',
    'insulina_regular','furosemida','heparina_no_fraccionada',
    'tramadol','gabapentina','morfina',
  ]);

  const criDrugs = drugs.filter(d =>
    CRI_IDS.has(d.id) &&
    (d.formType === 'injection' || d.formType === 'liquid_oral')
  ).sort((a,b) => a.generic.localeCompare(b.generic, 'es'));

  sel.innerHTML = '<option value="">-- seleccionar droga --</option>' +
    criDrugs.map(d =>
      `<option value="${d.id}" ${d.id === current ? 'selected' : ''}>${d.generic} (${d.trade}) — ${d.conc} mg/mL</option>`
    ).join('');
}

function updateCRI() {
  const drugId = document.getElementById('cri-drug-select').value;
  const rateInput = parseFloat(document.getElementById('cri-rate').value) || 0;
  const rateUnit = document.getElementById('cri-rate-unit').value; // mcg/kg/min or mg/kg/h or mg/kg/min
  const weightKg = getWeightKg();
  const dilVol = parseFloat(document.getElementById('cri-dil-vol').value) || 50;
  const stockVol = parseFloat(document.getElementById('cri-stock-vol').value) || 0;

  if (!drugId || rateInput <= 0 || weightKg <= 0) {
    document.getElementById('cri-result').style.display = 'none'; return;
  }

  const drugs = getDrugs();
  const drug = drugs.find(d => d.id === drugId);
  if (!drug) return;

  const concMgPerMl = drug.conc; // mg/mL of stock

  // Concentration of prepared syringe
  let concPrep = 0; // mg/mL of prepared solution
  if (stockVol > 0) {
    concPrep = (concMgPerMl * stockVol) / dilVol;
  } else {
    concPrep = concMgPerMl; // no dilution, use stock
  }

  // Rate desired: convert to mg/kg/min
  let rateMgKgMin = 0;
  if (rateUnit === 'mcg/kg/min') rateMgKgMin = rateInput / 1000;
  else if (rateUnit === 'mg/kg/min') rateMgKgMin = rateInput;
  else if (rateUnit === 'mg/kg/h') rateMgKgMin = rateInput / 60;

  // mL/h = (rate mg/kg/min × weight × 60) / conc mg/mL
  const mlPerHour = (rateMgKgMin * weightKg * 60) / concPrep;

  document.getElementById('cri-conc-prep').textContent = concPrep.toFixed(3) + ' mg/mL';
  document.getElementById('cri-ml-per-hour').textContent = mlPerHour.toFixed(2) + ' mL/h';
  document.getElementById('cri-drug-name').textContent = drug.generic;

  // Duration estimate if stock vol entered
  if (stockVol > 0 && mlPerHour > 0) {
    const hours = dilVol / mlPerHour;
    document.getElementById('cri-duration').textContent = hours.toFixed(1) + ' horas';
    document.getElementById('cri-duration-row').style.display = '';
  } else {
    document.getElementById('cri-duration-row').style.display = 'none';
  }

  const instrText = stockVol > 0
    ? `Tomar ${stockVol} cc de ${drug.generic} (${drug.conc} mg/mL) → llevar a ${dilVol} cc → concentración ${concPrep.toFixed(3)} mg/mL → pasar a ${mlPerHour.toFixed(2)} mL/h`
    : `Usar ${drug.generic} sin diluir (${drug.conc} mg/mL) → pasar a ${mlPerHour.toFixed(2)} mL/h`;
  document.getElementById('cri-instruction').textContent = instrText;
  document.getElementById('cri-result').style.display = 'block';
}

// ─── DRUGS DB ─────────────────────────────────────────────────────────────────
function renderDrugsDB(filter = '') {
  const drugs = getDrugs();
  const filtered = sortedDrugs(filter
    ? drugs.filter(d =>
        d.trade.toLowerCase().includes(filter.toLowerCase()) ||
        d.generic.toLowerCase().includes(filter.toLowerCase()))
    : drugs);

  const container = document.getElementById('drugs-db-list');
  if (filtered.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">💊</div><p>No se encontraron drogas.</p></div>`;
    return;
  }
  container.innerHTML = filtered.map(d => {
    const ft = d.formType || 'injection';
    const ftLabel = ft === 'tablet' ? '💊 Comp.' : ft === 'capsule' ? '💊 Cáp.' : ft === 'liquid_oral' ? '🧪 Oral' : ft === 'gas' ? '🌬️ Gas' : '💉 Inj.';
    const concLabel = (ft === 'tablet' || ft === 'capsule') ? `${d.conc} mg/u` : `${d.conc} mg/mL`;
    const needsVal = d.validationStatus && d.validationStatus.toLowerCase().includes('validar');
    return `
    <div class="db-row">
      <div style="flex:1;min-width:0">
        <div class="db-generic">${d.generic} ${needsVal ? '<span style="color:#b45309">⚠</span>' : '✅'}</div>
        <div class="db-trade">${d.trade} · <span style="color:var(--accent);font-size:11px">${ftLabel}</span></div>
        <div class="db-detail">${d.dosePref} ${d.unit} · ${concLabel} · ${d.route}</div>
        <div class="db-detail">Ref: ${d.doseMin}–${d.doseMax} ${d.unit} · ${d.source || ''}</div>
      </div>
      <button class="db-edit-btn" onclick="openEditDrug('${d.id}')">Editar</button>
    </div>`;
  }).join('');
}

function filterDrugs(v) { renderDrugsDB(v); }

function openAddDrug() {
  state.editingId = null;
  document.getElementById('modal-title-text').textContent = 'Nueva droga';
  ['edit-trade','edit-generic','edit-conc','edit-dose-min','edit-dose-max',
   'edit-dose-pref','edit-route','edit-notes','edit-id','edit-source','edit-validation',
   'edit-dog-dose','edit-cat-dose'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('edit-category').value = 'antiemetic';
  document.getElementById('edit-unit').value = 'mg/kg';
  document.getElementById('edit-formtype').value = 'injection';
  document.getElementById('edit-source').value = '';
  document.getElementById('edit-validation').value = 'Pendiente validación por usuario';
  document.getElementById('delete-btn-wrap').style.display = 'none';
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function openEditDrug(id) {
  const drugs = getDrugs();
  const d = drugs.find(x => x.id === id);
  if (!d) return;
  state.editingId = id;
  document.getElementById('modal-title-text').textContent = 'Editar droga';
  document.getElementById('edit-trade').value = d.trade;
  document.getElementById('edit-generic').value = d.generic;
  document.getElementById('edit-conc').value = d.conc;
  document.getElementById('edit-dose-min').value = d.doseMin;
  document.getElementById('edit-dose-max').value = d.doseMax;
  document.getElementById('edit-dose-pref').value = d.dosePref;
  document.getElementById('edit-route').value = d.route;
  document.getElementById('edit-notes').value = d.notes || '';
  document.getElementById('edit-id').value = d.id;
  document.getElementById('edit-category').value = d.category || 'antiemetic';
  document.getElementById('edit-unit').value = d.unit || 'mg/kg';
  document.getElementById('edit-formtype').value = d.formType || 'injection';
  document.getElementById('edit-source').value = d.source || '';
  document.getElementById('edit-validation').value = d.validationStatus || '';
  document.getElementById('edit-dog-dose').value = d.doseDog || '';
  document.getElementById('edit-cat-dose').value = d.doseCat || '';
  document.getElementById('delete-btn-wrap').style.display = 'block';
  document.getElementById('modal-overlay').classList.remove('hidden');
}

function saveDrug() {
  const trade    = document.getElementById('edit-trade').value.trim();
  const generic  = document.getElementById('edit-generic').value.trim();
  const conc     = parseFloat(document.getElementById('edit-conc').value);
  const doseMin  = parseFloat(document.getElementById('edit-dose-min').value);
  const doseMax  = parseFloat(document.getElementById('edit-dose-max').value);
  const dosePref = parseFloat(document.getElementById('edit-dose-pref').value);
  const route    = document.getElementById('edit-route').value.trim();
  const notes    = document.getElementById('edit-notes').value.trim();
  const category = document.getElementById('edit-category').value;
  const unit     = document.getElementById('edit-unit').value;
  const formType = document.getElementById('edit-formtype').value;
  const source   = document.getElementById('edit-source').value.trim();
  const validationStatus = document.getElementById('edit-validation').value.trim();
  const doseDog  = parseFloat(document.getElementById('edit-dog-dose').value) || null;
  const doseCat  = parseFloat(document.getElementById('edit-cat-dose').value) || null;

  if (!trade || !generic || isNaN(conc) || isNaN(doseMin) || isNaN(dosePref) || !route) {
    alert('Completa los campos obligatorios: nombre, concentración, dosis y vía.'); return;
  }

  const drugs = getDrugs();
  const doseMaxFix = isNaN(doseMax) ? doseMin : doseMax;

  if (state.editingId) {
    const idx = drugs.findIndex(d => d.id === state.editingId);
    if (idx !== -1) {
      drugs[idx] = { ...drugs[idx], trade, generic, conc, doseMin, doseMax: doseMaxFix,
        dosePref, route, notes, category, unit, formType, source, validationStatus, doseDog, doseCat };
    }
  } else {
    const id = generic.toLowerCase().replace(/[\s\-\/]+/g,'_').replace(/[^a-z0-9_]/g,'') + '_' + Date.now();
    drugs.push({ id, trade, generic, conc, doseMin, doseMax: doseMaxFix,
      dosePref, route, notes, category, unit, formType, source, validationStatus,
      doseDog, doseCat, calcMode: 'standard' });
  }

  saveDrugs(drugs);
  loadFreqPrefs();
  renderDrugList();
  renderDrugsDB();
  populateCRISelect();
  closeModal();
}

function deleteDrug() {
  if (!state.editingId) return;
  if (!confirm('¿Eliminar esta droga de tu base de datos?')) return;
  const drugs = getDrugs().filter(d => d.id !== state.editingId);
  saveDrugs(drugs);
  state.selectedDrugs.delete(state.editingId);
  loadFreqPrefs();
  renderDrugList();
  renderDrugsDB();
  populateCRISelect();
  closeModal();
}

function closeModal() { document.getElementById('modal-overlay').classList.add('hidden'); }
function closeModalOutside(e) { if (e.target === document.getElementById('modal-overlay')) closeModal(); }

function toggleConcHint() {
  const ft = document.getElementById('edit-formtype').value;
  const isSolid = ft === 'tablet' || ft === 'capsule';
  document.getElementById('conc-hint').style.display = isSolid ? 'block' : 'none';
  document.getElementById('conc-label').textContent = isSolid
    ? 'Potencia por unidad (mg / comprimido o cápsula)'
    : 'Concentración del vial (mg/mL)';
}

// ─── VALIDATE DRUG ────────────────────────────────────────────────────────────
function validateDrug(drugId, resultIdx) {
  const drugs = getDrugs();
  const idx = drugs.findIndex(d => d.id === drugId);
  if (idx === -1) return;
  drugs[idx].validationStatus = 'Validado por usuario';
  saveDrugs(drugs);
  // Update UI — remove validation row from this result card
  const valEl = document.querySelector(`#result-card-${resultIdx} [onclick*="validateDrug"]`);
  if (valEl) {
    const container = valEl.closest('div');
    container.innerHTML = '<span style="font-size:11px;color:var(--accent);font-weight:600">✓ Validado</span>';
    setTimeout(() => container.remove(), 1200);
  }
  // Also update lastResults so it persists if recalculated
  if (state.lastResults[resultIdx]) {
    state.lastResults[resultIdx].validationStatus = 'Validado por usuario';
  }
}

// ─── CHANGELOG ───────────────────────────────────────────────────────────────
const APP_VERSION = 'VetDose 2.0';
const CHANGELOG = [
  { v: 'v6', date: 'Mayo 2026', changes: [
    'Redondeo inteligente de comprimidos: entero o medio, con opciones prácticas',
    'Dosis canina vs felina: usa doseCat/doseDog cuando están definidas',
    'Levetiracetam ER (Keppra XR) agregado como entrada separada',
    'Nuevas drogas: Proin, Entyce, Elura, Mirtazapina oral, Mirataz',
    'Rediseño visual: interfaz minimalista y elegante',
    'CHANGELOG visible dentro de la app',
  ]},
  { v: 'v5', date: 'Mayo 2026', changes: [
    'Tablas de peso corregidas con datos oficiales del fabricante',
    'Simparica/Trio: colores de caja verificados',
    'Cytopoint: lógica de viales corregida (2 mg/kg mínimo)',
    'Librela: tabla fija por rango, no redondeo hacia arriba',
  ]},
  { v: 'v4', date: 'Mayo 2026', changes: [
    'Selector de especie 🐕 Canino / 🐈 Felino',
    '10 drogas por tabla de peso (Apoquel, Cytopoint, Simparica...)',
    'Búsqueda por texto + 22 filtros de categoría',
    'Antagonistas automáticos (atipamezole, naloxona, flumazenil)',
    'Ajuste de dosis post-cálculo',
    'CRI — Infusión a tasa constante en mL/h',
    'Cálculo por m² para oncología',
  ]},
  { v: 'v3', date: 'Abril 2026', changes: [
    '144 drogas (de 17 a 144)',
    'Campo fuente visible en resultados',
    'Badge ⚠ para drogas pendientes de validación',
    '14 colores de badge por categoría',
    'Modo dosis fija para unidades especiales',
  ]},
  { v: 'v2', date: 'Abril 2026', changes: [
    'Fondo claro con letras oscuras',
    'Logo VetDose en header',
    'Ingrediente activo primero',
    'Botón imprimir',
  ]},
  { v: 'v1', date: 'Abril 2026', changes: [
    'Versión inicial — PWA instalable en iPhone',
    '17 drogas seed, calculadora de dosis, exportar/importar',
  ]},
];

function showChangelog() {
  const html = CHANGELOG.map(v => `
    <div style="margin-bottom:16px">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px">
        <span style="background:var(--accent);color:#fff;font-size:11px;font-weight:800;padding:3px 9px;border-radius:12px">${v.v}</span>
        <span style="font-size:12px;color:var(--muted)">${v.date}</span>
      </div>
      <ul style="padding-left:16px;margin:0">
        ${v.changes.map(c => `<li style="font-size:13px;color:var(--text);padding:2px 0;line-height:1.4">${c}</li>`).join('')}
      </ul>
    </div>`).join('<hr style="border:none;border-top:1px solid var(--border);margin:12px 0">');

  document.getElementById('changelog-body').innerHTML = html;
  document.getElementById('changelog-modal').classList.remove('hidden');
}
function closeChangelog() { document.getElementById('changelog-modal').classList.add('hidden'); }

// ─── MÓDULO FLUIDOS ──────────────────────────────────────────────────────────

const FLUID_DATA = {
  lr:       { name: 'Lactato de Ringer (LR)',        uso: 'Reposición general, mantenimiento. Isotónico.' },
  nacl09:   { name: 'NaCl 0.9% (Salina normal)',     uso: 'Hipercalemia, alcalosis metabólica, bloqueo urinario.' },
  normosol: { name: 'Normosol-R / PlasmaLyte',       uso: 'Similar LR. Sin calcio — compatible con transfusiones.' },
  d5w:      { name: 'Dextrosa 5% en agua (D5W)',     uso: 'Hipernatremia. NO usar SQ. Solo fuente calórica IV.' },
  nacl045:  { name: 'NaCl 0.45% + Dex 2.5%',        uso: 'Mantenimiento felino. Hiperosmolaridad. Corrección lenta.' },
  hetastarch:{ name: 'Hetastarch (coloide)',          uso: 'Shock hipovolémico. Máx 20 mL/kg/día perros, 10 gatos.' },
  plasma:   { name: 'Plasma fresco congelado',       uso: 'Coagulopatías, déficit de factores de coagulación.' },
  nacl72:   { name: 'NaCl 7.2% (hipertónico)',       uso: 'Solo bolo emergencia: 3-5 mL/kg IV rápido. NO mantenimiento.' },
};

const DEHYDRATION_LEVELS = [
  { value: 0,    label: '< 5% — No detectable',             desc: 'Historia de pérdidas leves. Sin signos físicos.' },
  { value: 5.5,  label: '5–6% — Leve',                      desc: 'Mucosas ligeramente secas. Pliegue cutáneo normal.' },
  { value: 7.5,  label: '7–8% — Moderado',                  desc: 'Mucosas secas, pliegue lento, ojos levemente hundidos.' },
  { value: 11,   label: '10–12% — Severo',                   desc: 'Mucosas muy secas, pliegue persiste, taquicardia.' },
  { value: 13,   label: '> 12% — Crítico (shock)',           desc: 'Extremidades frías, colapso. Requiere bolo urgente.' },
];

function calcFluidos() {
  const wkg = parseFloat(document.getElementById('fl-weight').value) || 0;
  const species = document.getElementById('fl-species').value;
  const cardiac = document.getElementById('fl-cardiac').value === 'yes';
  const fluid = document.getElementById('fl-fluid').value;
  const dehyd = parseFloat(document.getElementById('fl-dehydration').value) || 0;
  const repTime = document.getElementById('fl-reptime').value;
  const hours = parseFloat(document.getElementById('fl-hours').value) || 24;
  const fever = parseFloat(document.getElementById('fl-fever').value) || 0;
  const losses = parseFloat(document.getElementById('fl-losses').value) || 0;

  if (wkg <= 0) { alert('Ingresa el peso del paciente.'); return; }

  // Maintenance rate
  let maintMin = species === 'cat' ? 2 : 2;
  let maintMax = species === 'cat' ? 3 : 5;
  let maintPref = species === 'cat' ? 2.5 : 3;

  // Cardiac adjustment
  if (cardiac) { maintMax = 2; maintPref = 1.5; }

  // Deficit
  const deficitMl = (dehyd / 100) * wkg * 1000;

  // Reposition time
  const repHours = cardiac ? 24 : (repTime === 'fast' ? 6 : 24);

  // Rates
  const maintRateMlH = maintPref * wkg;
  const deficitRateMlH = repHours > 0 ? deficitMl / repHours : 0;
  const feverExtra = fever > 39.5 ? (fever - 39.5) * 1 * wkg : 0;
  const totalPhase1 = maintRateMlH + deficitRateMlH + feverExtra + losses;
  const totalPhase2 = maintRateMlH + feverExtra + losses;

  // Volume totals
  const vol1 = totalPhase1 * repHours;
  const vol2 = totalPhase2 * (hours - repHours);
  const volTotal = vol1 + Math.max(0, vol2);

  // Bolus emergency
  const bolusMin = species === 'cat' ? 10 : 10;
  const bolusMax = species === 'cat' ? 10 : 20;
  const showBolus = dehyd >= 12;

  // NaCl 7.2% special
  const isHypertonic = fluid === 'nacl72';
  const isColloid = fluid === 'hetastarch';

  const fluidInfo = FLUID_DATA[fluid] || FLUID_DATA.lr;
  const speciesIcon = species === 'dog' ? '🐕' : '🐈';

  let warnings = [];
  if (cardiac) warnings.push('⚠ CARDIOPATÍA: tasa máxima 2 mL/kg/h. Sin bolos rápidos. Reposición siempre en 24h.');
  if (isHypertonic) warnings.push('⚠ NaCl 7.2%: SOLO bolo emergencia 3-5 mL/kg IV rápido. NO usar para mantenimiento.');
  if (isColloid) warnings.push(`⚠ Hetastarch: máx ${species==='cat'?10:20} mL/kg/día. Solo shock refractario a cristaloides.`);
  if (fluid === 'd5w') warnings.push('⚠ D5W: NO usar SQ. Solo IV. Monitorear electrolitos — puede causar hiponatremia.');
  if (fever > 39.5) warnings.push(`🌡 Fiebre ${fever}°C: +${feverExtra.toFixed(1)} mL/h adicionales.`);

  document.getElementById('fl-result').innerHTML = `
    <div style="background:#1a5c38;border-radius:12px;padding:13px 16px;margin-bottom:12px;color:#fff">
      <div style="font-size:18px;font-weight:800">${speciesIcon} Plan de Fluidos — ${wkg} kg</div>
      <div style="font-size:12px;color:#a7f3d0;margin-top:3px">${fluidInfo.name}</div>
    </div>

    ${deficitMl > 0 ? `
    <div class="result-card">
      <div class="result-header"><div class="result-names"><div class="result-generic">Déficit de Deshidratación</div><div class="result-trade">${dehyd}% × ${wkg} kg</div></div>
      <div class="result-dose">${deficitMl.toFixed(0)} mL</div></div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Tiempo reposición</div><div class="result-val">${repHours} horas ${cardiac?'(ajustado por cardiopatía)':''}</div></div>
        <div class="result-row"><div class="result-lbl">Tasa déficit</div><div class="result-val">${deficitRateMlH.toFixed(1)} mL/h</div></div>
      </div>
    </div>` : ''}

    <div class="result-card">
      <div class="result-header" style="background:linear-gradient(135deg,#d1fae5 0%,#ecfdf5 100%);border-bottom:2px solid #6ee7b7">
        <div class="result-names"><div class="result-generic">Fase 1 — Reposición + Mantenimiento</div><div class="result-trade">Primeras ${repHours} horas</div></div>
        <div class="result-dose">${totalPhase1.toFixed(1)} mL/h</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Mantenimiento</div><div class="result-val">${maintRateMlH.toFixed(1)} mL/h (${maintPref} mL/kg/h)</div></div>
        ${deficitMl > 0 ? `<div class="result-row"><div class="result-lbl">Déficit</div><div class="result-val">${deficitRateMlH.toFixed(1)} mL/h</div></div>` : ''}
        ${feverExtra > 0 ? `<div class="result-row"><div class="result-lbl">Extra fiebre</div><div class="result-val">+${feverExtra.toFixed(1)} mL/h</div></div>` : ''}
        ${losses > 0 ? `<div class="result-row"><div class="result-lbl">Pérdidas activas</div><div class="result-val">+${losses.toFixed(1)} mL/h</div></div>` : ''}
        <div class="result-row"><div class="result-lbl">Volumen fase 1</div><div class="result-val" style="font-weight:700">${vol1.toFixed(0)} mL en ${repHours}h</div></div>
      </div>
    </div>

    ${hours > repHours ? `
    <div class="result-card">
      <div class="result-header" style="background:linear-gradient(135deg,#eff6ff 0%,#fff 100%);border-bottom:2px solid #93c5fd">
        <div class="result-names"><div class="result-generic">Fase 2 — Mantenimiento</div><div class="result-trade">Horas ${repHours}–${hours}</div></div>
        <div class="result-dose" style="color:#1d4ed8">${totalPhase2.toFixed(1)} mL/h</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Volumen fase 2</div><div class="result-val" style="font-weight:700">${vol2.toFixed(0)} mL en ${hours-repHours}h</div></div>
      </div>
    </div>` : ''}

    <div class="result-card" style="border-color:#6ee7b7">
      <div class="result-header" style="background:#1a5c38">
        <div class="result-names"><div class="result-generic" style="color:#fff">VOLUMEN TOTAL ${hours}h</div><div class="result-trade" style="color:#a7f3d0">${fluidInfo.name}</div></div>
        <div class="result-dose" style="color:#a7f3d0">${volTotal.toFixed(0)} mL</div>
      </div>
      <div class="result-body">
        <div style="font-size:12px;color:var(--muted);line-height:1.5">ℹ ${fluidInfo.uso}</div>
      </div>
    </div>

    ${showBolus ? `
    <div class="result-card" style="border-color:#fca5a5">
      <div class="result-header" style="background:#fee2e2">
        <div class="result-names"><div class="result-generic" style="color:#991b1b">🚨 Bolo de Emergencia</div><div class="result-trade" style="color:#b91c1c">Shock — administrar primero</div></div>
        <div class="result-dose" style="color:#991b1b;font-size:16px">${(bolusMin*wkg).toFixed(0)}–${(bolusMax*wkg).toFixed(0)} mL</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Dosis</div><div class="result-val">${bolusMin}–${bolusMax} mL/kg en 15–20 min</div></div>
        <div class="result-row"><div class="result-lbl">Repetir PRN</div><div class="result-val">Evaluar respuesta entre bolos</div></div>
      </div>
    </div>` : ''}

    ${warnings.length > 0 ? warnings.map(w =>
      `<div class="warn-note"><span>⚠</span><span>${w}</span></div>`
    ).join('') : ''}
  `;
  document.getElementById('fl-result').style.display = 'block';
}

// ─── MÓDULO NUTRICIÓN ─────────────────────────────────────────────────────────

const MER_FACTORS_DOG = [
  { id: 'neutered',   label: 'Adulto castrado/castrada',     factor: 1.6 },
  { id: 'intact',     label: 'Adulto intacto/intacta',       factor: 1.8 },
  { id: 'weightloss', label: 'Pérdida de peso',              factor: 1.0 },
  { id: 'weightgain', label: 'Ganancia de peso',             factor: 1.4 },
  { id: 'puppy4',     label: 'Cachorro < 4 meses',           factor: 3.0 },
  { id: 'puppy4plus', label: 'Cachorro > 4 meses',           factor: 2.0 },
  { id: 'gestation',  label: 'Gestación (últimas 3 sem)',    factor: 3.0 },
  { id: 'lactation',  label: 'Lactancia',                    factor: 4.5 },
  { id: 'work_light', label: 'Trabajo ligero',               factor: 2.0 },
  { id: 'work_heavy', label: 'Trabajo intenso',              factor: 4.0 },
];

const MER_FACTORS_CAT = [
  { id: 'neutered',   label: 'Adulto castrado/castrada',     factor: 1.2 },
  { id: 'intact',     label: 'Adulto intacto/activo',        factor: 1.5 },
  { id: 'weightloss', label: 'Pérdida de peso',              factor: 0.8 },
  { id: 'growth',     label: 'Crecimiento/cachorro',         factor: 2.25},
  { id: 'gestation',  label: 'Gestación',                    factor: 2.0 },
  { id: 'lactation',  label: 'Lactancia',                    factor: 3.0 },
];

function populateNutFactors() {
  const species = document.getElementById('nut-species').value;
  const factors = species === 'dog' ? MER_FACTORS_DOG : MER_FACTORS_CAT;
  const sel = document.getElementById('nut-factor');
  const current = sel.value;
  sel.innerHTML = factors.map(f =>
    `<option value="${f.factor}" data-id="${f.id}" ${f.id==='neutered'?'selected':''}>${f.label} (× ${f.factor})</option>`
  ).join('');
}

function calcNutricion() {
  const species = document.getElementById('nut-species').value;
  const obese = document.getElementById('nut-obese').value === 'yes';
  const wActual = parseFloat(document.getElementById('nut-weight-actual').value) || 0;
  const wIdeal = parseFloat(document.getElementById('nut-weight-ideal').value) || wActual;
  const wCalc = obese ? wIdeal : wActual;
  const factor = parseFloat(document.getElementById('nut-factor').value) || 1.6;
  const kcalFood = parseFloat(document.getElementById('nut-kcal-food').value) || 0;
  const foodUnit = document.getElementById('nut-food-unit').value;

  if (wCalc <= 0) { alert('Ingresa el peso del paciente.'); return; }

  // RER calculations
  const rerLinear = (30 * wCalc) + 70;
  const rerPrecise = 70 * Math.pow(wCalc, 0.75);
  const rerUsed = rerPrecise;

  // MER
  const mer = rerUsed * factor;

  // Food quantity
  let foodQty = 0, foodText = '';
  if (kcalFood > 0) {
    foodQty = mer / kcalFood;
    const rounded = Math.round(foodQty * 4) / 4; // round to nearest 0.25
    foodText = `${rounded.toFixed(2)} ${foodUnit} / día`;
  }

  // Warnings
  const warnings = [];
  if (obese) warnings.push('⚠ Usando PESO IDEAL — en obesidad nunca usar peso actual para calcular calorías.');
  if (factor >= 3.0) warnings.push('ℹ Requerimiento alto — dividir en 3-4 comidas al día.');
  if (factor <= 1.0) warnings.push('ℹ Dieta restrictiva — monitorear BCS mensualmente y ajustar según respuesta.');
  warnings.push('ℹ Resultado es punto de partida. Ajustar según BCS, masa muscular y respuesta clínica individual.');

  const speciesIcon = species === 'dog' ? '🐕' : '🐈';
  const factorLabel = document.getElementById('nut-factor').options[document.getElementById('nut-factor').selectedIndex]?.text || '';

  document.getElementById('nut-result').innerHTML = `
    <div style="background:#1a5c38;border-radius:12px;padding:13px 16px;margin-bottom:12px;color:#fff">
      <div style="font-size:18px;font-weight:800">${speciesIcon} Requerimiento Calórico</div>
      <div style="font-size:12px;color:#a7f3d0;margin-top:3px">${wCalc} kg${obese?' (peso ideal)':''} · ${factorLabel}</div>
    </div>

    <div class="result-card">
      <div class="result-header" style="background:linear-gradient(135deg,#d1fae5 0%,#ecfdf5 100%);border-bottom:2px solid #6ee7b7">
        <div class="result-names">
          <div class="result-generic">RER — Requerimiento en Reposo</div>
          <div class="result-trade">70 × ${wCalc}kg^0.75</div>
        </div>
        <div class="result-dose">${rerPrecise.toFixed(0)} kcal/día</div>
      </div>
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">Fórmula lineal</div><div class="result-val">${rerLinear.toFixed(0)} kcal/día &nbsp;<span style="font-size:11px;color:var(--muted)">(30×kg+70)</span></div></div>
        <div class="result-row"><div class="result-lbl">Fórmula precisa</div><div class="result-val" style="font-weight:700">${rerPrecise.toFixed(0)} kcal/día &nbsp;<span style="font-size:11px;color:var(--muted)">(70×kg^0.75)</span></div></div>
      </div>
    </div>

    <div class="result-card" style="border-color:#6ee7b7">
      <div class="result-header" style="background:#1a5c38">
        <div class="result-names">
          <div class="result-generic" style="color:#fff">MER — Requerimiento Metabólico</div>
          <div class="result-trade" style="color:#a7f3d0">${rerPrecise.toFixed(0)} × ${factor} = </div>
        </div>
        <div class="result-dose" style="color:#a7f3d0;font-size:28px">${mer.toFixed(0)} kcal/día</div>
      </div>
      ${kcalFood > 0 ? `
      <div class="result-body">
        <div class="result-row"><div class="result-lbl">kcal del alimento</div><div class="result-val">${kcalFood} kcal / ${foodUnit}</div></div>
        <div class="result-row">
          <div class="result-lbl">Cantidad diaria</div>
          <div class="result-val" style="font-size:17px;font-weight:800;color:var(--accent)">${foodText}</div>
        </div>
      </div>` : `
      <div class="result-body">
        <div style="font-size:12px;color:var(--muted)">Ingresa las kcal del alimento para calcular la cantidad.</div>
      </div>`}
    </div>

    ${warnings.map(w => `<div class="warn-note"><span>ℹ</span><span>${w}</span></div>`).join('')}
  `;
  document.getElementById('nut-result').style.display = 'block';
}

// ─── EXPORT / IMPORT ─────────────────────────────────────────────────────────
function exportDrugs() {
  const drugs = getDrugs();
  const payload = { version: 2, exportDate: new Date().toISOString(), count: drugs.length, drugs };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement('a');
  a.href = url;
  a.download = `vetdose-drogas-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importDrugs(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const payload = JSON.parse(e.target.result);
      const drugs = Array.isArray(payload) ? payload : payload.drugs;
      if (!Array.isArray(drugs) || drugs.length === 0) {
        alert('El archivo no contiene drogas válidas.'); return;
      }
      const current = getDrugs();
      if (!confirm(`Importar ${drugs.length} drogas?\nEsto reemplazará tu base de datos actual (${current.length} drogas).`)) return;
      saveDrugs(drugs);
      renderDrugList();
      renderDrugsDB();
      populateCRISelect();
      alert(`✅ ${drugs.length} drogas importadas correctamente.`);
    } catch(err) {
      alert('Error al leer el archivo JSON.');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}

// Fix scroll target id
document.querySelector('.content').id = 'content-scroll';
