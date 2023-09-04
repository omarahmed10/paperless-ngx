import { Component, OnDestroy, OnInit } from '@angular/core';
import { ComponentWithPermissions } from '../with-permissions/with-permissions.component';
import { DocumentService } from 'src/app/services/rest/document.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, switchMap, takeUntil } from 'rxjs';


@Component({
  selector: 'app-document-enhance',
  templateUrl: './document-enhance.component.html',
  styleUrls: ['./document-enhance.component.scss']
})
export class DocumentEnhanceComponent 
  extends ComponentWithPermissions
  implements OnInit, OnDestroy {

    unsubscribeNotifier: Subject<any> = new Subject()
    
    constructor(
      private documentsService: DocumentService,
      private route: ActivatedRoute,
    ) {
      super()
    }

  ngOnInit(): void {
    console.log('paramMap ', this.route.paramMap)
    this.route.paramMap
      .pipe(
        takeUntil(this.unsubscribeNotifier),
        switchMap((paramMap) => {
          const documentId = +paramMap.get('id')
          console.log('1: doc id =', documentId)
          return this.documentsService.get(documentId)
        })
      )
    this.route.paramMap.subscribe((paramMap) => {
      const documentId = +paramMap.get('id')
      console.log('2: doc id =', documentId)
      console.log('doc = ', this.documentsService.get(documentId))
    })
  }

  ngOnDestroy(): void {
    this.unsubscribeNotifier.next(this)
    this.unsubscribeNotifier.complete()
  }

}
