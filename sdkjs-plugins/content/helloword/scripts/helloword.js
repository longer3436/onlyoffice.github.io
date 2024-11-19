window.Asc.plugin.init = function(){
    this.callCommand(() => {
        const oDocument = Api.GetDocument()
        const oParagraph = Api.CreateParagraph()
        oParagraph.AddText("Hello world!")
        oDocument.InsertContent([oParagraph])
      }, true)
}


window.Asc.plugin.button = function button(id) {}