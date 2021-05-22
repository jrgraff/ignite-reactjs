import React, { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header"
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./TransactionsContext";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewModalTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewModalTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewModalTransactionOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
