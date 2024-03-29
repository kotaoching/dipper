define(["../../../../../core/declare",
        "dojo/_base/lang",
        "dojo/has",
        "../../../base/Descriptor",
        "../../../form/Element",
        "../../../form/InputSelectOne",
        "../../../form/Options",
        "../../../form/Option",
        "../../../form/iso/AbstractObject",
        "../../../form/iso/CodeListAttribute",
        "../../../form/iso/CodeListValueAttribute",
        "../../../form/iso/CodeListElement",
        "../../../form/iso/CodeListReference",
        "../../../form/iso/CodeSpaceAttribute",
        "../../../form/iso/GcoElement",
        "../../../form/iso/ObjectReference",
        "../gmd/citation/CI_OnlineFunctionCode",
        "dojo/text!./templates/ContainsOperations.html",
        "../../../../../kernel"],
function(declare, lang, has, Descriptor, Element, InputSelectOne, Options, Option, AbstractObject, CodeListAttribute,
  CodeListValueAttribute, CodeListElement, CodeListReference, CodeSpaceAttribute, GcoElement, ObjectReference,
  CI_OnlineFunctionsCode, template, esriKernel) {

  var oThisClass = declare(Descriptor, {

    templateString: template

  });

  

  return oThisClass;
});