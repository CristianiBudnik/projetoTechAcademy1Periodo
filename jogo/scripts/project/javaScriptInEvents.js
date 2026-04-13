

const scriptsInEvents = {

	async Geral_Event7_Act2(runtime, localVars)
	{
		runtime.globalVars.cristaisColetados += 1;
		const label = runtime.objects.txtContador.getFirstInstance();
		if (label){
			label.text="Cristais: "+ runtime.globalVars.cristaisColetados;
		}
	},

	async FolhaDeEventosEmBreve_Event3_Act7(runtime, localVars)
	{
		function abrirModalEmBreve() {
		    document.getElementById("modalPropaganda").style.display = "flex";
		}
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;
