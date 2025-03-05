import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
})
export class PaginationComponent {
  currentPage = 1;
  itemsPerPage = 5;
  data = Array.from({ length: 15 }, (_, i) => `Item ${i + 1}`);

  get paginatedData() {
    return this.data.slice((this.currentPage - 1) * this.itemsPerPage, this.currentPage * this.itemsPerPage);
  }

  nextPage() {
    if (this.currentPage * this.itemsPerPage < this.data.length) this.currentPage++;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }
}