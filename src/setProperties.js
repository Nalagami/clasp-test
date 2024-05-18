function setProperties(){

    const obj = {
        secret_a: 'John',
        secret_b: 30
    };

    // スクリプトプロパティ
    const scriptProperties = PropertiesService.getScriptProperties();
    scriptProperties.setProperties(obj);
    
}