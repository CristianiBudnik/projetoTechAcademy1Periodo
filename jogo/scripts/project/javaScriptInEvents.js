

const scriptsInEvents = {

	async Geral_Event7_Act2(runtime, localVars)
	{
		runtime.globalVars.cristaisColetados += 1;
		const label = runtime.objects.txtContador.getFirstInstance();
		if (label){
			label.text="Cristais: "+ runtime.globalVars.cristaisColetados;
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
