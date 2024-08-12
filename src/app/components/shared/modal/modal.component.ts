import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, EventEmitter, Input, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterViewInit {

  @Input() title: string = 'Modal Title';
  @Input() okButtonText: string = 'OK';
  @Input() cancelButtonText: string = 'Cancel';
  @Input() extraButtons: { text: string, cssClass: string, action: () => void }[] = [];
  @Input() okButtonCss: string = '';
  @Input() cancelButtonCss: string = '';
  @Input() modalWidth: string = '50%';
  @Input() modalHeight: string = 'auto';
  @Input() contentComponent!: TemplateRef<any>;

  @Output() ok = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();
  @ViewChild('content', { read: ViewContainerRef }) content!: ViewContainerRef;

  isDragging = false;
  offsetX = 0;
  offsetY = 0;

  ngAfterViewInit() {
    if (this.contentComponent) {
      this.content.createEmbeddedView(this.contentComponent);
    }
  }

  onOkClick() {
    this.ok.emit();
  }

  onCancelClick() {
    this.cancel.emit();
  }

  closeModal() {
    this.cancel.emit();
  }

  startDrag(event: MouseEvent) {
    this.isDragging = true;
    this.offsetX = event.clientX - (event.target as HTMLElement).getBoundingClientRect().left;
    this.offsetY = event.clientY - (event.target as HTMLElement).getBoundingClientRect().top;
  }

  stopDrag() {
    this.isDragging = false;
  }

  dragModal(event: MouseEvent) {
    if (this.isDragging) {
      const modalElement = document.getElementById('modal-container');
      if (modalElement) {
        modalElement.style.left = `${event.clientX - this.offsetX}px`;
        modalElement.style.top = `${event.clientY - this.offsetY}px`;
      }
    }
  }
}
