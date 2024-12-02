import React, { useState } from 'react';

interface TransactionFormProps {
  onSend: (to: string, amount: string) => Promise<string>;
}

const TransactionForm: React.FC<TransactionFormProps> = ({ onSend }) => {
  const [to, setTo] = useState('');
  const [amount, setAmount] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!to || !amount) {
      setError('모든 필드를 입력해주세요.');
      return;
    }

    try {
      setSending(true);
      setError('');
      const txHash = await onSend(to, amount);
      setTo('');
      setAmount('');
      alert(`전송 완료! 트랜잭션 해시: ${txHash}`);
    } catch (err) {
      setError('전송에 실패했습니다.');
      console.error(err);
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="transaction-form">
      <h3>코인 전송</h3>
      {error && <div className="error-message">{error}</div>}
      <div className="form-group">
        <label htmlFor="to">받는 주소:</label>
        <input
          id="to"
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="0x..."
          disabled={sending}
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">금액 (ETH):</label>
        <input
          id="amount"
          type="number"
          step="0.000001"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          disabled={sending}
        />
      </div>
      <button type="submit" disabled={sending}>
        {sending ? '전송 중...' : '전송'}
      </button>
    </form>
  );
};

export default TransactionForm;