/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '../../../components/lazy-loaded-tree-view/country-demo';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '../../../components/lazy-loaded-tree-view/redux/store';
import * as import5 from '../../../components/lazy-loaded-tree-view/tree-node-service';
import * as import6 from '@angular/core/src/linker/view_utils';
import * as import7 from '@angular/core/src/di/injector';
import * as import8 from '@angular/core/src/linker/view_type';
import * as import9 from '@angular/core/src/change_detection/change_detection';
import * as import10 from '@angular/http/src/http';
import * as import11 from '@angular/core/src/metadata/view';
import * as import12 from '@angular/core/src/linker/component_factory';
import * as import13 from './tree-view.ngfactory';
import * as import14 from '../../../components/lazy-loaded-tree-view/tree-view';
export class Wrapper_CountryDemo {
  context:import0.CountryDemo;
  changed:boolean;
  constructor() {
    this.changed = false;
    this.context = new import0.CountryDemo();
  }
  detectChangesInInputProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
    return changed;
  }
  detectChangesInHostProps(view:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
}
var renderType_CountryDemo_Host:import2.RenderComponentType = (null as any);
class _View_CountryDemo_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _CountryDemo_0_4:Wrapper_CountryDemo;
  __Store_0_5:import4.Store;
  __TreeNodeService_0_6:import5.TreeNodeService;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement) {
    super(_View_CountryDemo_Host0,renderType_CountryDemo_Host,import8.ViewType.HOST,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  get _Store_0_5():import4.Store {
    if ((this.__Store_0_5 == (null as any))) { (this.__Store_0_5 = new import4.Store(this.parentInjector.get(import10.Http))); }
    return this.__Store_0_5;
  }
  get _TreeNodeService_0_6():import5.TreeNodeService {
    if ((this.__TreeNodeService_0_6 == (null as any))) { (this.__TreeNodeService_0_6 = new import5.TreeNodeService(this._Store_0_5)); }
    return this.__TreeNodeService_0_6;
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = import6.selectOrCreateRenderHostElement(this.renderer,'country-demo',import6.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_CountryDemo0(this.viewUtils,this.injector(0),this._appEl_0);
    this._CountryDemo_0_4 = new Wrapper_CountryDemo();
    this._appEl_0.initComponent(this._CountryDemo_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._CountryDemo_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.CountryDemo) && (0 === requestNodeIndex))) { return this._CountryDemo_0_4.context; }
    if (((token === import4.Store) && (0 === requestNodeIndex))) { return this._Store_0_5; }
    if (((token === import5.TreeNodeService) && (0 === requestNodeIndex))) { return this._TreeNodeService_0_6; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._CountryDemo_0_4.detectChangesInInputProps(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._CountryDemo_0_4.detectChangesInHostProps(this,this._el_0,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_CountryDemo_Host0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_CountryDemo_Host === (null as any))) { (renderType_CountryDemo_Host = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_CountryDemo_Host0(viewUtils,parentInjector,declarationEl);
}
export const CountryDemoNgFactory:import12.ComponentFactory<import0.CountryDemo> = new import12.ComponentFactory<import0.CountryDemo>('country-demo',viewFactory_CountryDemo_Host0,import0.CountryDemo);
const styles_CountryDemo:any[] = ([] as any[]);
var renderType_CountryDemo:import2.RenderComponentType = (null as any);
class _View_CountryDemo0 extends import1.AppView<import0.CountryDemo> {
  _el_0:any;
  _text_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _LazyTreeView_3_4:import13.Wrapper_LazyTreeView;
  constructor(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement) {
    super(_View_CountryDemo0,renderType_CountryDemo,import8.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import9.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = import6.createRenderElement(this.renderer,parentRenderNode,'h1',import6.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'Lazy loaded TreeView using Redux and RxJs',(null as any));
    this._text_2 = this.renderer.createText(parentRenderNode,'\n            ',(null as any));
    this._el_3 = import6.createRenderElement(this.renderer,parentRenderNode,'lazy-tree-view',import6.EMPTY_INLINE_ARRAY,(null as any));
    this._appEl_3 = new import3.AppElement(3,(null as any),this,this._el_3);
    var compView_3:any = import13.viewFactory_LazyTreeView0(this.viewUtils,this.injector(3),this._appEl_3);
    this._LazyTreeView_3_4 = new import13.Wrapper_LazyTreeView(this.parentInjector.get(import4.Store),this.parentInjector.get(import5.TreeNodeService));
    this._appEl_3.initComponent(this._LazyTreeView_3_4.context,([] as any[]),compView_3);
    compView_3.create(this._LazyTreeView_3_4.context,([] as any[]),(null as any));
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._text_2,
      this._el_3
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import14.LazyTreeView) && (3 === requestNodeIndex))) { return this._LazyTreeView_3_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.node;
    this._LazyTreeView_3_4.check_root(currVal_3_0_0,throwOnChange,false);
    this._LazyTreeView_3_4.detectChangesInInputProps(this,this._el_3,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this._LazyTreeView_3_4.detectChangesInHostProps(this,this._el_3,throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  destroyInternal():void {
    this._LazyTreeView_3_4.context.ngOnDestroy();
  }
}
export function viewFactory_CountryDemo0(viewUtils:import6.ViewUtils,parentInjector:import7.Injector,declarationEl:import3.AppElement):import1.AppView<import0.CountryDemo> {
  if ((renderType_CountryDemo === (null as any))) { (renderType_CountryDemo = viewUtils.createRenderComponentType('',0,import11.ViewEncapsulation.None,styles_CountryDemo,{})); }
  return new _View_CountryDemo0(viewUtils,parentInjector,declarationEl);
}